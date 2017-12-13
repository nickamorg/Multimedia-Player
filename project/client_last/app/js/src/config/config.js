//*******************************************
//  Global System Configurations
//*******************************************

var GlobalConfig = (function () {
  var ip_address = "localhost";
  var DebugMode = false;     //true/false

  var Connections = {
    Sockets: 'ws://' + ip_address + ':6556/', // URL of socket server
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

GlobalConfig.ip_address = "localhost";