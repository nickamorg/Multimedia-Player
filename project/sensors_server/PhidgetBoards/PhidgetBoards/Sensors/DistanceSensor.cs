using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Phidgets.Events;

namespace PhidgetBoards
{
    public class DistanceSensor : Sensor
    {

        public DistanceSensor(int serialNumber, int id = 0) : base(serialNumber, id) { }

        protected override void Initialize()
        {
            //
        }

        public override void OnChange(object sender, SensorChangeEventArgs e)
        {
            this.SendMessage("sensors/distance", e.Value);
        }
    }
}
