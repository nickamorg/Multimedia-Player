using System;
using System.Windows;
using WebSocketSharp;

namespace SensorsController
{

    /// <summary>
    /// A simple wrapper for redis client
    /// </summary>
    public class WebSocketClient
    {

        private WebSocket wsServer;

        // Redis server info
        private string serverIP;
        private int serverPort;

        private static WebSocketClient _instance = null;
        private WebSocketClient(string serverIP, int serverPort)
        {
            this.serverIP = serverIP;
            this.serverPort = serverPort;

            wsServer = new WebSocket("ws://" + serverIP + ":" + serverPort);

            wsServer.Connect();
           
        }

        public static WebSocketClient Instance()
        {
            if (_instance == null)
                throw new InvalidOperationException("AmIRedisClient not Initialized before getting instance");
            return _instance;
        }

        public static WebSocketClient Initialize(string serverIP = "127.0.0.1", int serverPort = 6336)
        {
            _instance = new WebSocketClient(serverIP, serverPort);
            return _instance;
        }

        /* ------------------------------------------------------------------------------ */

        /// <summary>
        /// Publish a message to a channel
        /// </summary>
        /// <param name="channel">the name of the channel that the message will be published</param>
        /// <param name="message">the message that will be published -It should be in a JSON format</param>
        public void Publish(string channel, string message)
        {

            if (!wsServer.IsAlive)
                wsServer.Connect();

            string sMessage = "{\"channel\": \"" + channel + "\", \"message\":" + message + "}";
            wsServer.SendAsync(sMessage, success =>
            {
                //message was send successfully
            });
        }
    }
}
