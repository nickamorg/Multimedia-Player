using Phidgets;
using Phidgets.Events;
using System;

namespace PhidgetBoards
{
    public abstract class Sensor
    {
        protected InterfaceKit sensor;
        protected int serialNumber;
        protected int id;

        internal Action<string, string> ValueChanged;


        public Sensor(int serialNumber, int id)
        {
            this.serialNumber = serialNumber;
            this.id = id;
            Initialize();
        }

        public void Close()
        {
            sensor?.close();
        }

        protected abstract void Initialize();

        public abstract void OnChange(object sender, SensorChangeEventArgs e);


        protected void SendMessage(string channel, int actualValue)
        {
            var message = "{\"serialNumber\":" + this.serialNumber + ",\"actualValue\":" + actualValue + ",\"id\": " + id + "}";
            ValueChanged?.Invoke(channel, message);
        }

    }
}
