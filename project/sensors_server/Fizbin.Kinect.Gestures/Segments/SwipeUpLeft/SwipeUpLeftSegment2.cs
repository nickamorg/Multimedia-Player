using Microsoft.Kinect;

namespace Fizbin.Kinect.Gestures.Segments
{
    /// <summary>
    /// The second part of the swipe up Left gesture
    /// </summary>
    public class SwipeUpLeftSegment2 : IRelativeGestureSegment
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
                // Left hand below shoulder and above spine
                if (skeleton.Joints[JointType.HandLeft].Position.Y < skeleton.Joints[JointType.ShoulderCenter].Position.Y
                    && skeleton.Joints[JointType.HandLeft].Position.Y > skeleton.Joints[JointType.Spine].Position.Y)
                {
                    // Left hand Left of spine
                    if (skeleton.Joints[JointType.HandLeft].Position.X < skeleton.Joints[JointType.Spine].Position.X)
                    {
                        //Debug.WriteLine("SwipeUpLeftSegment2 OK!: " + skeleton.Joints[JointType.HandLeft].Position.Y + " Spine=" + skeleton.Joints[JointType.Spine].Position.Y);
                        return GesturePartResult.Suceed;
                    }
                    //Debug.WriteLine("SwipeUpLeftSegment2 fail (X)");
                    return GesturePartResult.Fail;
                }
                //Debug.WriteLine("SwipeUpLeftSegment2 fail (Y): " + skeleton.Joints[JointType.HandLeft].Position.Y + " Spine=" + skeleton.Joints[JointType.Spine].Position.Y);
                return GesturePartResult.Fail;
            }
            //Debug.WriteLine("SwipeUpLeftSegment2 fail (Z)");
            return GesturePartResult.Fail;
        }
    }
}
