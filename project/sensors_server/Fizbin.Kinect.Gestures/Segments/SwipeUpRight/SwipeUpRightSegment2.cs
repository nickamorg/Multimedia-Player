using Microsoft.Kinect;

namespace Fizbin.Kinect.Gestures.Segments
{
    /// <summary>
    /// The second part of the swipe up Right gesture
    /// </summary>
    public class SwipeUpRightSegment2 : IRelativeGestureSegment
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
                // Right hand below shoulder and above spine
                if (skeleton.Joints[JointType.HandRight].Position.Y < skeleton.Joints[JointType.ShoulderCenter].Position.Y
                    && skeleton.Joints[JointType.HandRight].Position.Y > skeleton.Joints[JointType.Spine].Position.Y)
                {
                    // Right hand Right of spine
                    if (skeleton.Joints[JointType.HandRight].Position.X > skeleton.Joints[JointType.Spine].Position.X)
                    {
                        //Debug.WriteLine("SwipeUpRightSegment2 OK!: " + skeleton.Joints[JointType.HandRight].Position.Y + " Spine=" + skeleton.Joints[JointType.Spine].Position.Y);
                        return GesturePartResult.Suceed;
                    }
                    //Debug.WriteLine("SwipeUpRightSegment2 fail (X)");
                    return GesturePartResult.Fail;
                }
                //Debug.WriteLine("SwipeUpRightSegment2 fail (Y): " + skeleton.Joints[JointType.HandRight].Position.Y + " Spine=" + skeleton.Joints[JointType.Spine].Position.Y);
                return GesturePartResult.Fail;
            }
            //Debug.WriteLine("SwipeUpRightSegment2 fail (Z)");
            return GesturePartResult.Fail;
        }
    }
}
