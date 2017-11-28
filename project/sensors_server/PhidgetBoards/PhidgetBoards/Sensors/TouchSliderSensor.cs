using Phidgets;
using Phidgets.Events;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PhidgetBoards
{
    public class TouchSliderSensor : Sensor
    {

        public TouchSliderSensor(int serialNumber, int id = 0) : base(serialNumber, id) { }

        protected override void Initialize()
        {
            sensor = new InterfaceKit();
            sensor.open(serialNumber);
            sensor.SensorChange += OnChange;
        }

        public override void OnChange(object sender, SensorChangeEventArgs e)
        {
            this.SendMessage("sensors/touchslider", e.Value);
        }
    }
}
