const WebSocket = require('ws');

const SENSORS_SERVER_WEBSOCKET_PORT = 6336;

var wsServer;

const sensorsChannels = {
    sensorsDistance: "sensors/distance",
    sensorsLight: "sensors/light",
    sensorsLinear: "sensors/linear",
    sensorsRotation: "sensors/rotation",
    sensorsTouch: "sensors/touch",
    kinectMovement: "kinect/movement",
    kinectGesture: "kinect/gesture",
    kinectSpeech: "kinect/speech",
    kinectRotationY: "kinect/rotationY",
    kinectPosition: "kinect/position"
}

function startServer(callback) {

    //startServer only once
    if (wsServer) return;

    //start server
    wsServer = new WebSocket.Server({ port: SENSORS_SERVER_WEBSOCKET_PORT }, () => {
        console.log(`Websocket server for sensors started on port: ${SENSORS_SERVER_WEBSOCKET_PORT}`);
    });

    wsServer.on('connection', function connection(ws) {

        console.log(`client connected on ws server for sensors`);

        
        //callback that will be called whenever the client sends a message to the server
        ws.on('message', function incoming(message) {
            try {
                var jMessage = JSON.parse(message);
            } catch (e) {
                console.error("Sensors ws Server: Message received from a client not in JSON format");
                return;
            }

            if (!jMessage.channel || !jMessage.message) {
                console.error("Sensors ws Server: Message received from a client not in the correct format (channel,message)");
                return;
            }

            callback(jMessage.channel, jMessage.message);
        });

        ws.on('close', function close() {
            console.log(`client disconnected from ws server for sensors`);
        });

    });

}

module.exports.sensorsChannels = sensorsChannels;
module.exports.startServer = startServer;

