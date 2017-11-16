//*******************************************
//  Global System Configurations
//*******************************************

var GlobalConfig = (function () {
  var DebugMode = true;     //true/false

  var Connections = {
    Sockets: 'ws://127.0.0.1:6556/', // URL of socket server
  };

  var Pages = {
    InitialPage: 'lobby'     // initial page to display
  };

  var Cursor = {
    Duration: 2500,         // How long to stay in btn in order to perform click (ms)
    LoadingStroke: 9,       // cursor design options
    LoadingColor: '#FFD800' // cursor design options
  };

  return {
    DebugMode: DebugMode,
    Connections: Connections,
    Pages: Pages,
    Cursor: Cursor
  }
})();
