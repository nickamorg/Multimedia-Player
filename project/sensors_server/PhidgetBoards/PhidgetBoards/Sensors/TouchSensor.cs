using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Phidgets.Events;

namespace PhidgetBoards
{
    public class TouchSensor : Sensor
    {
        private Boolean isReverse;

        public TouchSensor(int serialNumber, int id = 0, Boolean isReverse = false) : base(serialNumber, id) { this.isReverse = isReverse; }

        protected override void Initialize()
        {
            //
        }

        public override void OnChange(object sender, SensorChangeEventArgs e)
        {
            if ((e.Value > 500 && !isReverse) || (e.Value < 100 && isReverse))
                this.SendMessage("sensors/touch", 1);
        }
    }
}
