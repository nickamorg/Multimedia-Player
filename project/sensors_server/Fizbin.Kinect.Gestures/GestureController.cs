using System;
using System.Collections.Generic;
using Fizbin.Kinect.Gestures.Segments;
using Microsoft.Kinect;

namespace Fizbin.Kinect.Gestures
{
    public class GestureController
    {
        /// <summary>
        /// The list of all gestures we are currently looking for
        /// </summary>
        private List<Gesture> gestures = new List<Gesture>();

        /// <summary>
        /// Initializes a new instance of the <see cref="GestureController"/> class.
        /// </summary>
        public GestureController()
        {
            // Define the gestures

            IRelativeGestureSegment[] joinedhandsSegments = new IRelativeGestureSegment[20];
            JoinedHandsSegment1 joinedhandsSegment = new JoinedHandsSegment1();
            for (int i = 0; i < 20; i++)
            {
                // gesture consists of the same thing 10 times 
                joinedhandsSegments[i] = joinedhandsSegment;
            }
            AddGesture(GestureType.JoinedHands, joinedhandsSegments);

            IRelativeGestureSegment[] menuSegments = new IRelativeGestureSegment[20];
            MenuSegment1 menuSegment = new MenuSegment1();
            for (int i = 0; i < 20; i++)
            {
                // gesture consists of the same thing 20 times 
                menuSegments[i] = menuSegment;
            }
            AddGesture(GestureType.Menu, menuSegments);

            IRelativeGestureSegment[] swipeleftSegments = new IRelativeGestureSegment[3];
            swipeleftSegments[0] = new SwipeLeftSegment1();
            swipeleftSegments[1] = new SwipeLeftSegment2();
            swipeleftSegments[2] = new SwipeLeftSegment3();
            AddGesture(GestureType.SwipeLeft, swipeleftSegments);

            IRelativeGestureSegment[] swiperightSegments = new IRelativeGestureSegment[3];
            swiperightSegments[0] = new SwipeRightSegment1();
            swiperightSegments[1] = new SwipeRightSegment2();
            swiperightSegments[2] = new SwipeRightSegment3();
            AddGesture(GestureType.SwipeRight, swiperightSegments);

            IRelativeGestureSegment[] swipeUpLeftSegments = new IRelativeGestureSegment[3];
            swipeUpLeftSegments[0] = new SwipeUpLeftSegment1();
            swipeUpLeftSegments[1] = new SwipeUpLeftSegment2();
            swipeUpLeftSegments[2] = new SwipeUpLeftSegment3();
            AddGesture(GestureType.SwipeUpLeft, swipeUpLeftSegments);

            IRelativeGestureSegment[] swipeUpRightSegments = new IRelativeGestureSegment[3];
            swipeUpRightSegments[0] = new SwipeUpRightSegment1();
            swipeUpRightSegments[1] = new SwipeUpRightSegment2();
            swipeUpRightSegments[2] = new SwipeUpRightSegment3();
            AddGesture(GestureType.SwipeUpRight, swipeUpRightSegments);

            IRelativeGestureSegment[] swipeDownLeftSegments = new IRelativeGestureSegment[3];
            swipeDownLeftSegments[0] = new SwipeDownLeftSegment1();
            swipeDownLeftSegments[1] = new SwipeDownLeftSegment2();
            swipeDownLeftSegments[2] = new SwipeDownLeftSegment3();
            AddGesture(GestureType.SwipeDownLeft, swipeDownLeftSegments);

            IRelativeGestureSegment[] swipeDownRightSegments = new IRelativeGestureSegment[3];
            swipeDownRightSegments[0] = new SwipeDownRightSegment1();
            swipeDownRightSegments[1] = new SwipeDownRightSegment2();
            swipeDownRightSegments[2] = new SwipeDownRightSegment3();
            AddGesture(GestureType.SwipeDownRight, swipeDownRightSegments);

            IRelativeGestureSegment[] waveRightSegments = new IRelativeGestureSegment[6];
            WaveRightSegment1 waveRightSegment1 = new WaveRightSegment1();
            WaveRightSegment2 waveRightSegment2 = new WaveRightSegment2();
            waveRightSegments[0] = waveRightSegment1;
            waveRightSegments[1] = waveRightSegment2;
            waveRightSegments[2] = waveRightSegment1;
            waveRightSegments[3] = waveRightSegment2;
            waveRightSegments[4] = waveRightSegment1;
            waveRightSegments[5] = waveRightSegment2;
            AddGesture(GestureType.WaveRight, waveRightSegments);

            IRelativeGestureSegment[] waveLeftSegments = new IRelativeGestureSegment[6];
            WaveLeftSegment1 waveLeftSegment1 = new WaveLeftSegment1();
            WaveLeftSegment2 waveLeftSegment2 = new WaveLeftSegment2();
            waveLeftSegments[0] = waveLeftSegment1;
            waveLeftSegments[1] = waveLeftSegment2;
            waveLeftSegments[2] = waveLeftSegment1;
            waveLeftSegments[3] = waveLeftSegment2;
            waveLeftSegments[4] = waveLeftSegment1;
            waveLeftSegments[5] = waveLeftSegment2;
            AddGesture(GestureType.WaveLeft, waveLeftSegments);

            IRelativeGestureSegment[] zoomInSegments = new IRelativeGestureSegment[3];
            zoomInSegments[0] = new ZoomSegment1();
            zoomInSegments[1] = new ZoomSegment2();
            zoomInSegments[2] = new ZoomSegment3();
            AddGesture(GestureType.ZoomIn, zoomInSegments);

            IRelativeGestureSegment[] zoomOutSegments = new IRelativeGestureSegment[3];
            zoomOutSegments[0] = new ZoomSegment3();
            zoomOutSegments[1] = new ZoomSegment2();
            zoomOutSegments[2] = new ZoomSegment1();
            AddGesture(GestureType.ZoomOut, zoomOutSegments);
        }

        /// <summary>
        /// Occurs when [gesture recognised].
        /// </summary>
        public event EventHandler<GestureEventArgs> GestureRecognized;

        /// <summary>
        /// Updates all gestures.
        /// </summary>
        /// <param name="data">The skeleton data.</param>
        public void UpdateAllGestures(Skeleton data)
        {
            foreach (Gesture gesture in this.gestures)
            {
                gesture.UpdateGesture(data);
            }
        }

        /// <summary>
        /// Adds the gesture.
        /// </summary>
        /// <param name="type">The gesture type.</param>
        /// <param name="gestureDefinition">The gesture definition.</param>
        public void AddGesture(GestureType type, IRelativeGestureSegment[] gestureDefinition)
        {
            Gesture gesture = new Gesture(type, gestureDefinition);
            //gesture.GestureRecognized += new EventHandler<GestureEventArgs>(this.Gesture_GestureRecognized);
            gesture.GestureRecognized += OnGestureRecognized;
            this.gestures.Add(gesture);
        }

        /// <summary>
        /// Handles the GestureRecognized event of the g control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="KinectSkeltonTracker.GestureEventArgs"/> instance containing the event data.</param>
        //private void Gesture_GestureRecognized(object sender, GestureEventArgs e)
        private void OnGestureRecognized(object sender, GestureEventArgs e)
        {
            if (this.GestureRecognized != null)
            {
                this.GestureRecognized(this, e);
            }

            foreach (Gesture g in this.gestures)
            {
                g.Reset();
            }
        }
    }
}
