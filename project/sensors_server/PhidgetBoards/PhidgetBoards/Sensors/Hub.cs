using Phidgets;
using Phidgets.Events;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PhidgetBoards
{
    public class Hub
    {

        internal Action<string, string> ValueChanged;

        private InterfaceKit hubKit;
        private int serialNumber;

        private Dictionary<int, Sensor> sensors;

        public Hub(int serialNumber)
        {

            //var manager = new Manager();
            //manager.open();

            hubKit = new Phidgets.InterfaceKit();
            hubKit.open(serialNumber);
            hubKit.SensorChange += OnChange;

            sensors = new Dictionary<int, Sensor>();

            this.serialNumber = serialNumber;

        }

        public void SetSensor(int index, SensorType sensorType)
        {
            Sensor sensor = null;

            switch (sensorType)
            {
                case SensorType.DISTANCE:
                    sensor = new DistanceSensor(serialNumber, index);
                    break;
                case SensorType.LIGHT:
                    sensor = new LightSensor(serialNumber, index);
                    break;
                case SensorType.TOUCH:
                    sensor = new TouchSensor(serialNumber, index);
                    break;
                case SensorType.TOUCH_REVERSED:
                    sensor = new TouchSensor(serialNumber, index , true);
                    break;
            }


            if (sensor != null)
            {
                sensors[index] = sensor;
                sensor.ValueChanged = (string channel, string message) => ValueChanged?.Invoke(channel, message);
            }

        }

        private void OnChange(object sender, SensorChangeEventArgs e)
        {
            if (sensors.ContainsKey(e.Index))
                sensors[e.Index].OnChange(sender, e);
        }

    }
}
