using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PhidgetBoards
{
    public class Board
    {

        private List<Sensor> sensors;
        private Hub hub;

        public Action<string, string> ValueChanged;

        public Board()
        {
            sensors = new List<Sensor>();
        }

        public void SetHub(Hub hub)
        {
            this.hub = hub;
        }

        public Hub GetHub()
        {
            return hub;
        }

        public void AddSensor(Sensor sensor)
        {
            this.sensors.Add(sensor);
        }

        public void Run()
        {
            hub.ValueChanged = (string channel, string message) => ValueChanged?.Invoke(channel, message);
            sensors.ForEach(sensor => sensor.ValueChanged = (string channel, string message) => ValueChanged?.Invoke(channel, message));
        }


    }
}