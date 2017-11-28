using Fizbin.Kinect.Gestures;
using Microsoft.Kinect;
using Microsoft.Kinect.Toolkit;
using Microsoft.Kinect.Toolkit.Controls;
using Microsoft.Speech.AudioFormat;
using Microsoft.Speech.Recognition;
using System;
using System.IO;
using System.Text;
using System.Windows.Data;

namespace SensorsController
{
    class KinectController
    {

        private readonly KinectSensorChooser sensorChooser;
        private GestureGenerator gestureGenerator;
        private SpeechRecognitionEngine speechEngine;
        private Skeleton[] skeletonData;

        private static KinectController _instance;

        private KinectController(KinectSensorChooserUI kinectSensorChooserUI, KinectRegion kinectRegion)
        {

            gestureGenerator = new GestureGenerator();

            sensorChooser = new KinectSensorChooser();
            sensorChooser.KinectChanged += SensorChooserOnKinectChanged;
            kinectSensorChooserUI.KinectSensorChooser = this.sensorChooser;
            sensorChooser.Start();

            var regionSensorBinding = new Binding("Kinect") { Source = this.sensorChooser };
            BindingOperations.SetBinding(kinectRegion, KinectRegion.KinectSensorProperty, regionSensorBinding);

            // Listen to recognized gestures
            gestureGenerator.GestureRecognized = GestureGenerator_GestureRecognized;

            //transmit the hand movements
            KinectHandMovement();
        }

        public static KinectController Instance()
        {
            if (_instance == null)
                throw new InvalidOperationException("not yet initialized");
            return _instance;
        }

        public static KinectController Initialize(KinectSensorChooserUI kinectSensorChooserUI, KinectRegion kinectRegion)
        {
            if (_instance == null)
                _instance = new KinectController(kinectSensorChooserUI, kinectRegion);
            return _instance;
        }

        /* ------------------------------------------------------------------------------ */
        /* ------------------------------------------------------------------------------ */

        /// <summary>
        /// Sets the callback for kinect hand position changes
        /// </summary>
        private void KinectHandMovement()
        {
            KinectCursorVisualizer.PositionChanged = (double x, double y, HandType type) =>
            {
                var message = "{\"x\":" + x + ",\"y\":" + y + ",\"handType\": \"" + type + "\"}";
                WebSocketClient.Instance().Publish("kinect/movement", message);
            };
        }

        /// <summary>
        /// Called when the Kinect sensor 
        /// </summary>
        /// <param name="gestureType">the gesture type that was recognized</param>
        /// <param name="trackingId">the tracking id for the gesture</param>
        private void GestureGenerator_GestureRecognized(GestureType gestureType, int trackingId)
        {
            var message = "{\"gestureType\": \"" + gestureType + "\",\"trackingId\" : " + trackingId + "}";
            WebSocketClient.Instance().Publish("kinect/gesture", message);
        }

        /// <summary>
        /// Handler for recognized speech events.
        /// </summary>
        /// <param name="sender">object sending the event.</param>
        /// <param name="e">event arguments.</param>
        private void SpeechRecognized(object sender, SpeechRecognizedEventArgs e)
        {
            // Speech utterance confidence below which we treat speech as if it hadn't been heard
            const double ConfidenceThreshold = 0.3;

            if (e.Result.Confidence >= ConfidenceThreshold)
            {
                var message = "{\"speechValue\": \"" + e.Result.Semantics.Value.ToString() + "\"}";
                WebSocketClient.Instance().Publish("kinect/speech", message);
            }
        }


        /// <summary>
        /// Handler for head rotation
        /// </summary>
        /// <param name="trackingId"> The tracking id for the user</param>
        /// <param name="rotationY"> The Y axis rotation value</param>
        private void SkeletonUpdateSpineRotationY(int trackingId, double rotationY)
        {
            var message = "{\"trackId\": " + trackingId + ",\"rotationY\" :" + rotationY + "}";
            WebSocketClient.Instance().Publish("kinect/rotationY", message);
        }


        /// <summary>
        /// Handlre for user position
        /// </summary>
        /// <param name="TrackingId">User tracking id</param>
        /// <param name="positionX">user's X axis value</param>
        /// <param name="positionY">user's Y axis value</param>
        /// <param name="positionZ">user's Z axis value</param>
        private void SkeletonUpdateSpinePosition(int TrackingId, float positionX, float positionY, float positionZ)
        {
            var message = "{\"trackId\": " + TrackingId
                + ",\"positionX\" : " + positionX
                + ",\"positionY\" : " + positionY
                + ",\"positionZ\" : " + positionZ + "}";

            WebSocketClient.Instance().Publish("kinect/position", message);
        }


        /* ------------------------------------------------------------------------------ */
        /* ------------------------------------------------------------------------------ */


        /// <summary>
        /// Called when the KinectSensorChooser gets a new sensor
        /// </summary>
        /// <param name="sender">sender of the event</param>
        /// <param name="args">event arguments</param>
        private void SensorChooserOnKinectChanged(object sender, KinectChangedEventArgs args)
        {
            // Initialize Gesture Generator
            gestureGenerator.Initialize(args.OldSensor, args.NewSensor);

            var x = new KinectCursorVisualizer();

            // Handle old and new sensor normally..
            if (args.OldSensor != null)
            {
                try
                {
                    args.OldSensor.DepthStream.Range = DepthRange.Default;
                    args.OldSensor.SkeletonStream.EnableTrackingInNearRange = false;
                    args.OldSensor.DepthStream.Disable();
                    args.OldSensor.SkeletonStream.Disable();
                }
                catch (InvalidOperationException)
                {
                    // KinectSensor might enter an invalid state while enabling/disabling streams or stream features.
                    // E.g.: sensor might be abruptly unplugged.
                }
            }

            if (args.NewSensor != null)
            {
                try
                {
                    gestureGenerator.Initialize(args.OldSensor, args.NewSensor);

                    args.NewSensor.DepthStream.Enable(DepthImageFormat.Resolution640x480Fps30);
                    args.NewSensor.SkeletonStream.Enable();
                    skeletonData = new Skeleton[args.NewSensor.SkeletonStream.FrameSkeletonArrayLength]; // Allocate ST data

                    args.NewSensor.SkeletonFrameReady += new EventHandler<SkeletonFrameReadyEventArgs>(kinect_SkeletonFrameReady);
                    try
                    {
                        args.NewSensor.DepthStream.Range = DepthRange.Default;
                        args.NewSensor.SkeletonStream.EnableTrackingInNearRange = true;
                    }
                    catch (InvalidOperationException)
                    {
                        // Non Kinect for Windows devices do not support Near mode, so reset back to default mode.
                        args.NewSensor.DepthStream.Range = DepthRange.Default;
                        args.NewSensor.SkeletonStream.EnableTrackingInNearRange = false;
                    }


                    RecognizerInfo ri = GetKinectRecognizer();

                    if (null != ri)
                    {
                        this.speechEngine = new SpeechRecognitionEngine(ri.Id);


                        // Create a grammar from grammar definition XML file.
                        using (var memoryStream = new MemoryStream(Encoding.ASCII.GetBytes(Properties.Resources.SpeechGrammar)))
                        {
                            var g = new Grammar(memoryStream);
                            speechEngine.LoadGrammar(g);
                        }
                        speechEngine.SpeechRecognized += SpeechRecognized;

                        // For long recognition sessions (a few hours or more), it may be beneficial to turn off adaptation of the acoustic model. 
                        // This will prevent recognition accuracy from degrading over time.
                        ////speechEngine.UpdateRecognizerSetting("AdaptationOn", 0);

                        speechEngine.SetInputToAudioStream(
                        args.NewSensor.AudioSource.Start(), new SpeechAudioFormatInfo(EncodingFormat.Pcm, 16000, 16, 1, 32000, 2, null));
                        speechEngine.RecognizeAsync(RecognizeMode.Multiple);
                    }

                    Console.WriteLine("Kinect sensor connected");
                }
                catch (InvalidOperationException)
                {
                    // KinectSensor might enter an invalid state while enabling/disabling streams or stream features.
                    // E.g.: sensor might be abruptly unplugged.
                }
            }
        }

        /// <summary>
        /// Called when skeleton frame is ready
        /// </summary>
        /// <param name="sender">sender for the event</param>
        /// <param name="e">event arguments</param>
        private void kinect_SkeletonFrameReady(object sender, SkeletonFrameReadyEventArgs e)
        {
            using (SkeletonFrame skeletonFrame = e.OpenSkeletonFrame()) // Open the Skeleton frame
            {
                if (skeletonFrame != null && this.skeletonData != null) // check that a frame is available
                {
                    skeletonFrame.CopySkeletonDataTo(this.skeletonData); // get the skeletal information in this frame
                }
            }
            foreach (Skeleton skeleton in this.skeletonData)
            {
                if (skeleton?.TrackingState == SkeletonTrackingState.Tracked)
                {
                    if (skeleton.Joints[JointType.Spine].TrackingState == JointTrackingState.Tracked)
                    {

                        SkeletonUpdateSpinePosition(skeleton.TrackingId,
                            skeleton.Position.X,
                            skeleton.Position.Y,
                            skeleton.Position.Z);

                        if (skeleton.Joints[JointType.Spine].TrackingState == JointTrackingState.Tracked)
                        {
                            //var rotationX = skeleton.BoneOrientations[JointType.Spine].AbsoluteRotation.Quaternion.Pitch();
                            float rotationY = (float)skeleton.BoneOrientations[JointType.Spine].AbsoluteRotation.Quaternion.Yaw();
                            // rotationZ = skeleton.BoneOrientations[JointType.Spine].AbsoluteRotation.Quaternion.Roll();

                            SkeletonUpdateSpineRotationY(skeleton.TrackingId, rotationY);
                        }
                    }

                }
            }

        }


        /// <summary>
        /// Gets the metadata for the speech recognizer (acoustic model) most suitable to
        /// process audio from Kinect device.
        /// </summary>
        /// <returns>
        /// RecognizerInfo if found, <code>null</code> otherwise.
        /// </returns>
        private static RecognizerInfo GetKinectRecognizer()
        {
            foreach (RecognizerInfo recognizer in SpeechRecognitionEngine.InstalledRecognizers())
            {

                string value;
                recognizer.AdditionalInfo.TryGetValue("Kinect", out value);
                if ("True".Equals(value, StringComparison.OrdinalIgnoreCase) && "en-US".Equals(recognizer.Culture.Name, StringComparison.OrdinalIgnoreCase))
                {
                    return recognizer;
                }
            }

            return null;
        }

    }


}
