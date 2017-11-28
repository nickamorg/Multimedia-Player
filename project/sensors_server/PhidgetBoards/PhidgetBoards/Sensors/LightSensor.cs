using Phidgets.Events;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PhidgetBoards
{
    public class LightSensor : Sensor
    {
        public LightSensor(int serialNumber, int id = 0) : base(serialNumber, id) { }

        protected override void Initialize()
        {
            //
        }

        public override void OnChange(object sender, SensorChangeEventArgs e)
        {
            this.SendMessage("sensors/light", e.Value);
        }
    }
}
