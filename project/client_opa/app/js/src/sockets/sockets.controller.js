//*******************************************
//  SOCKETS CONTROLLER
//*******************************************
var Sockets = (function () {
  var socketConnection = null;

  /**
   * Connect to socket server
   */
  function Connect() {
    socketConnection = new WebSocket(GlobalConfig.Connections.Sockets);

    socketConnection.onopen = function () {
      console.info("Sockets connected!");
    };

    socketConnection.onerror = function (error) {
      console.info('Sockets Error: ' + error);
    };

    socketConnection.onmessage = function (e) {
      var msg = jQuery.parseJSON(e.data);

      var msgType = msg.channel;
      if (msgType == 'kinect/movement') {
        // move cursor
        Gestures.Manager(`hand:show:${msg.message.handType.toLowerCase()}`);
        Cursor.Move(msg.message.y, msg.message.x);
      } else if (msgType == 'voice') {
        // redirect to voice manager
        Voice.Manager(msg.message);
      } else if (msgType == 'gesture') {
        // redirect to gesture manager
        Gesture.Manager(msg.message);
      } else if (msgType == 'sensors') {
        // redirect to sensor manager
        Sensors.Manager(msg.message);
      }
    };
  }

  /**
   * Disconnect from socket server
   */
  function Disconnect() {
    socketConnection.disconnect();
    console.info('Sockets disconnected!');
  }

  /**
   * Send message to socket server
   * 
   * @param {string} type - Type of message
   * @param {any} msg - Object to send as message  
   */
  function SendMessage(type, msg) {
    socketConnection.send({
      type: type,
      message: msg
    });
  }

  return {
    Connect: Connect,
    Disconnect: Disconnect,
    SendMessage: SendMessage
  };
})();