﻿using Microsoft.Kinect;
using System.Diagnostics;

namespace Fizbin.Kinect.Gestures.Segments
{
    /// <summary>
    /// The first part of the swipe up Left gesture
    /// </summary>
    public class SwipeUpLeftSegment1 : IRelativeGestureSegment
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
                // Left hand below spine
                if (skeleton.Joints[JointType.HandLeft].Position.Y < skeleton.Joints[JointType.Spine].Position.Y)
                {
                    // Left hand Left of spine
                    if (skeleton.Joints[JointType.HandLeft].Position.X < skeleton.Joints[JointType.Spine].Position.X)
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
