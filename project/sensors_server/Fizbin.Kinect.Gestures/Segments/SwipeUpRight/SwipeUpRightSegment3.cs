
﻿using Microsoft.Kinect;

namespace Fizbin.Kinect.Gestures.Segments
{
    /// <summary>
    /// The third part of the swipe up Right gesture
    /// </summary>
    public class SwipeUpRightSegment3 : IRelativeGestureSegment
    {
        /// <summary>
        /// Checks the gesture.
        /// </summary>
        /// <param name="skeleton">The skeleton.</param>
        /// <returns>GesturePartResult based on if the gesture part has been completed</returns>
        public GesturePartResult CheckGesture(Skeleton skeleton)
        {
            // Right hand in front of Right elbow
            if (skeleton.Joints[JointType.HandRight].Position.Z < skeleton.Joints[JointType.ElbowRight].Position.Z)
            {
                //// Right hand Right of spine
                if (skeleton.Joints[JointType.HandRight].Position.X > skeleton.Joints[JointType.Spine].Position.X)
                {
                    // Right hand above Right shoulder
                    if (skeleton.Joints[JointType.HandRight].Position.Y > skeleton.Joints[JointType.ShoulderRight].Position.Y)
                    {
                        //Debug.WriteLine("SwipeDownRightSegment3 OK! (Y): " + skeleton.Joints[JointType.HandRight].Position.Y + " ShoulderRight=" + skeleton.Joints[JointType.ShoulderRight].Position.Y);
                        return GesturePartResult.Suceed;
                    }
                    // Gesture has not failed but also is not complete
                    //Debug.WriteLine("SwipeUpRightSegment3 wait!: " + skeleton.Joints[JointType.HandRight].Position.Y + " ShoulderRight=" + skeleton.Joints[JointType.ShoulderRight].Position.Y);
                    return GesturePartResult.Pausing;
                }
                //Debug.WriteLine("SwipeUpRightSegment3 fail (X)");
                return GesturePartResult.Fail;
            }
            //Debug.WriteLine("SwipeUpRightSegment3 fail (Z)");
            return GesturePartResult.Fail;
        }
    }
}
