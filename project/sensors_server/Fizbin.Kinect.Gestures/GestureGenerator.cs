using Microsoft.Kinect;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;

namespace Fizbin.Kinect.Gestures
{
    public class GestureGenerator
    {
        private Skeleton[] skeletons = new Skeleton[0];

        public Action<GestureType, int> GestureRecognized;


        // skeleton gesture recognizer
        GestureController gestureController;

        public GestureGenerator()
        {
            // initialize the gesture recognizer
            gestureController = new GestureController();
            gestureController.GestureRecognized += OnGestureRecognized;
        }

        public void Initialize(KinectSensor previousSensor, KinectSensor newSensor)
        {
            if (previousSensor != null)
            {
                // try unregister callbacks to previous sensor
                try
                {
                    previousSensor.SkeletonFrameReady -= OnSkeletonFrameReady;
                }
                catch { }
            }

            // configure the skeleton stream
            newSensor.SkeletonFrameReady += OnSkeletonFrameReady;
        }


        #region Event Handlers

        /// <summary>
        ///
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e">Gesture event arguments.</param>
        private void OnGestureRecognized(object sender, GestureEventArgs e)
        {

            GestureRecognized?.Invoke(e.GestureType, e.TrackingId);

            #region ---
            //Debug.WriteLine(e.GestureType);
            //string Gesture = "";
            //switch (e.GestureType)
            //{
            //    case GestureType.Menu:
            //        Gesture = "Menu";
            //        break;
            //    case GestureType.WaveRight:
            //        Gesture = "Wave Right";
            //        break;
            //    case GestureType.WaveLeft:
            //        Gesture = "Wave Left";
            //        break;
            //    case GestureType.JoinedHands:
            //        Gesture = "Joined Hands";
            //        break;
            //    case GestureType.SwipeLeft:
            //        Gesture = "Swipe Left";
            //        break;
            //    case GestureType.SwipeRight:
            //        Gesture = "Swipe Right";
            //        break;
            //    case GestureType.SwipeUpLeft:
            //        Gesture = "Swipe Up Left";
            //        break;
            //    case GestureType.SwipeUpRight:
            //        Gesture = "Swipe Up Right";
            //        break;
            //    case GestureType.SwipeDownRight:
            //        Gesture = "Swipe Down Right";
            //        break;
            //    case GestureType.SwipeDownLeft:
            //        Gesture = "Swipe Down Left";
            //        break;
            //    case GestureType.ZoomIn:
            //        Gesture = "Zoom In";
            //        break;
            //    case GestureType.ZoomOut:
            //        Gesture = "Zoom Out";
            //        break;

            //    default:
            //        break;
            //}
            #endregion
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void OnSkeletonFrameReady(object sender, SkeletonFrameReadyEventArgs e)
        {
            using (SkeletonFrame frame = e.OpenSkeletonFrame())
            {
                if (frame == null)
                    return;

                // resize the skeletons array if needed
                if (skeletons.Length != frame.SkeletonArrayLength)
                    skeletons = new Skeleton[frame.SkeletonArrayLength];

                // get the skeleton data
                frame.CopySkeletonDataTo(skeletons);

                foreach (var skeleton in skeletons)
                {
                    // skip the skeleton if it is not being tracked
                    if (skeleton.TrackingState != SkeletonTrackingState.Tracked)
                        continue;

                    // update the gesture controller
                    gestureController.UpdateAllGestures(skeleton);
                }
            }
        }

        #endregion Event Handlers
    }
}
