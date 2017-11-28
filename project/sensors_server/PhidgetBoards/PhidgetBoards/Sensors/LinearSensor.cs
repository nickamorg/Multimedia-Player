using Phidgets;
using Phidgets.Events;

namespace PhidgetBoards
{
    public class LinearSensor : Sensor
    {

        public LinearSensor(int serialNumber, int id = 0) : base(serialNumber, id) { }

        protected override void Initialize()
        {
            sensor = new InterfaceKit();
            sensor.open(serialNumber);
            sensor.SensorChange += OnChange;
        }

        public override void OnChange(object sender, SensorChangeEventArgs e)
        {
            this.SendMessage("sensors/linear", e.Value);
        }
    }
}
