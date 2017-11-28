using PhidgetBoards;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SensorsController
{
    class PhidgetController
    {
        private Board phidgetBoard;

        private static PhidgetController _instance;

        private PhidgetController() { }

        public static PhidgetController Instance()
        {
            if (_instance == null)
                _instance = new PhidgetController();
            return _instance;
        }

        /* ------------------------------------------------------------------------------ */

        //BUILD A BOARD
        public void InitializeBoard()
        {
            //create new board
            phidgetBoard = new Board();

            //create the hub
            var hub = new Hub(97442);

            //set what sensor is connected to hub per index
            hub.SetSensor(0, SensorType.TOUCH_REVERSED);
            hub.SetSensor(1, SensorType.TOUCH_REVERSED);
            hub.SetSensor(2, SensorType.TOUCH_REVERSED);
            hub.SetSensor(3, SensorType.TOUCH_REVERSED);
            hub.SetSensor(7, SensorType.LIGHT);

            //add the hub to the main board (each board can have exactly one hub)
            phidgetBoard.SetHub(hub);

            //Add any independent sensors to the board
            phidgetBoard.AddSensor(new TouchSliderSensor(65451));
            phidgetBoard.AddSensor(new TouchSliderSensor(65317));
            phidgetBoard.AddSensor(new RotationSensor(55352));

            //set the callback for messages when a sensor changes value
            phidgetBoard.ValueChanged = (string channel, string message) =>
            {
                WebSocketClient.Instance().Publish(channel, message);
            };

            //Start the board
            phidgetBoard.Run();
        }

    }
}
