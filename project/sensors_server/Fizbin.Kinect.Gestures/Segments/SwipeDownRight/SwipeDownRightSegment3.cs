using Microsoft.Kinect;
using System.Diagnostics;

namespace Fizbin.Kinect.Gestures.Segments
{
    /// <summary>
    /// The third part of the swipe down gesture for the right hand
    /// </summary>
    public class SwipeDownRightSegment3 : IRelativeGestureSegment
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
                //// right hand right of spine
                if (skeleton.Joints[JointType.HandRight].Position.X > skeleton.Joints[JointType.Spine].Position.X)
                {
                    // right hand below spine
                    if (skeleton.Joints[JointType.HandRight].Position.Y < skeleton.Joints[JointType.Spine].Position.Y)
                    {
                        //Debug.WriteLine("SwipeDownSegment3 OK! (Y): " + skeleton.Joints[JointType.HandRight].Position.Y + " Spine=" + skeleton.Joints[JointType.Spine].Position.Y);
                        return GesturePartResult.Suceed;
                    }
                    // Gesture has not failed but also is not complete
                    //Debug.WriteLine("SwipeDownSegment3 wait!: " + skeleton.Joints[JointType.HandRight].Position.Y + " Spine=" + skeleton.Joints[JointType.Spine].Position.Y);
                    return GesturePartResult.Pausing;
                }
                //Debug.WriteLine("SwipeDownSegment3 fail (X)");
                return GesturePartResult.Fail;
            }
            //Debug.WriteLine("SwipeDownSegment3 fail (Z)");
            return GesturePartResult.Fail;
        }
    }
}
