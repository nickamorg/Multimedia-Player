$(document).ready(function () {

  if (!GlobalConfig.DebugMode) {
    //Disable cursor
    $('body').css('cursor', 'none');

    //Start sockets' connections
    Sockets.Connect();
  }

});

//*******************************************
//  Move Hand with cursor for debugging 
//*******************************************
$(document).on('mousemove', function (e) {
  if (GlobalConfig.DebugMode) {
    var mousetop = e.pageY;
    var mouseleft = e.pageX;

    if ($('#cursor').is(":visible")) {
      Cursor.Move(mousetop, mouseleft);
    }
  }
});

//*******************************************
//  Key events for debugging 
//*******************************************
$(document).keydown(function (e) {
  //ONLY FOR DEBUG
  if (GlobalConfig.DebugMode) {
    switch (e.which) {
      case 187: Gestures.Manager('hand:show:right');  // "=" key
        break;
      case 189: Gestures.Manager('hand:hide');        // "-" key
        break;
      case 48: Gestures.Manager('hand:show:left');    // "0" key
        break;
      default: break;// exit this handler for other keys
    }
  }
  // prevent the default action 
  //e.preventDefault(); 
});