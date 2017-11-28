
﻿using Microsoft.Kinect;

namespace Fizbin.Kinect.Gestures.Segments
{
    /// <summary>
    /// The third part of the swipe up Left gesture
    /// </summary>
    public class SwipeUpLeftSegment3 : IRelativeGestureSegment
    {
        /// <summary>
        /// Checks the gesture.
        /// </summary>
        /// <param name="skeleton">The skeleton.</param>
        /// <returns>GesturePartResult based on if the gesture part has been completed</returns>
        public GesturePartResult CheckGesture(Skeleton skeleton)
        {
            // Left hand in front of Left elbow
            if (skeleton.Joints[JointType.HandLeft].Position.Z < skeleton.Joints[JointType.ElbowLeft].Position.Z)
            {
                //// Left hand Left of spine
                if (skeleton.Joints[JointType.HandLeft].Position.X < skeleton.Joints[JointType.Spine].Position.X)
                {
                    // Left hand above left shoulder
                    if (skeleton.Joints[JointType.HandLeft].Position.Y > skeleton.Joints[JointType.ShoulderLeft].Position.Y)
                    {
                        //Debug.WriteLine("SwipeDownLeftSegment3 OK! (Y): " + skeleton.Joints[JointType.HandLeft].Position.Y + " ShoulderLeft=" + skeleton.Joints[JointType.ShoulderLeft].Position.Y);
                        return GesturePartResult.Suceed;
                    }
                    // Gesture has not failed but also is not complete
                    //Debug.WriteLine("SwipeUpLeftSegment3 wait!: " + skeleton.Joints[JointType.HandLeft].Position.Y + " ShoulderLeft=" + skeleton.Joints[JointType.ShoulderLeft].Position.Y);
                    return GesturePartResult.Pausing;
                }
                //Debug.WriteLine("SwipeUpLeftSegment3 fail (X)");
                return GesturePartResult.Fail;
            }
            //Debug.WriteLine("SwipeUpLeftSegment3 fail (Z)");
            return GesturePartResult.Fail;
        }
    }
}
