﻿using Microsoft.Kinect;
using System.Diagnostics;

namespace Fizbin.Kinect.Gestures.Segments
{
    /// <summary>
    /// The first part of the swipe up Right gesture
    /// </summary>
    public class SwipeUpRightSegment1 : IRelativeGestureSegment
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
                // Right hand below spine
                if (skeleton.Joints[JointType.HandRight].Position.Y < skeleton.Joints[JointType.Spine].Position.Y)
                {
                    // Right hand Right of spine
                    if (skeleton.Joints[JointType.HandRight].Position.X > skeleton.Joints[JointType.Spine].Position.X)
                    {
                        return GesturePartResult.Suceed;
                    }
                    return GesturePartResult.Pausing;
                }
                return GesturePartResult.Fail;
            }
            return GesturePartResult.Fail;
        }
    }
}
