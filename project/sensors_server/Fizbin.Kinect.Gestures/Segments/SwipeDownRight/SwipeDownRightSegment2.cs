﻿using Microsoft.Kinect;
using System.Diagnostics;

namespace Fizbin.Kinect.Gestures.Segments
{
    /// <summary>
    /// The second part of the swipe down gesture for the right hand
    /// </summary>
    public class SwipeDownRightSegment2 : IRelativeGestureSegment
    {
        /// <summary>
        /// Checks the gesture.
        /// </summary>
        /// <param name="skeleton">The skeleton.</param>
        /// <returns>GesturePartResult based on if the gesture part has been completed</returns>
        public GesturePartResult CheckGesture(Skeleton skeleton)
        {
            // right hand in front of right elbow
            if (skeleton.Joints[JointType.HandRight].Position.Z < skeleton.Joints[JointType.ElbowRight].Position.Z)
            {
                // right hand below shoulder and above spine
                if (skeleton.Joints[JointType.HandRight].Position.Y < skeleton.Joints[JointType.ShoulderCenter].Position.Y
                    && skeleton.Joints[JointType.HandRight].Position.Y > skeleton.Joints[JointType.Spine].Position.Y)
                {
                    // right hand right of spine
                    if (skeleton.Joints[JointType.HandRight].Position.X > skeleton.Joints[JointType.Spine].Position.X)
                    {
                        //Debug.WriteLine("SwipeDownSegment2 OK!: " + skeleton.Joints[JointType.HandRight].Position.Y + " Spine=" + skeleton.Joints[JointType.Spine].Position.Y);
                        return GesturePartResult.Suceed;
                    }
                    //Debug.WriteLine("SwipeDownSegment2 fail (X)");
                    return GesturePartResult.Fail;
                }
                //Debug.WriteLine("SwipeDownSegment2 fail (Y): " + skeleton.Joints[JointType.HandRight].Position.Y + " Spine=" + skeleton.Joints[JointType.Spine].Position.Y);
                return GesturePartResult.Fail;
            }
            //Debug.WriteLine("SwipeDownSegment2 fail (Z)");
            return GesturePartResult.Fail;
        }
    }
}
