//*******************************************
//  GESTURES CONTROLLER FILE
//*******************************************
var Gestures = (function () {

  /**
   * Central Manager for gesture commands
   * 
   * @param {string} cmd 
   */
  function Manager(cmd) {

    if (GlobalConfig.DebugMode) console.info(cmd);

    //Hand commands
    if (cmd.contains('hand:')) {
      if (cmd.contains('hand:show:')) {
        //set orientation
        if (cmd.contains("left")) Cursor.SetOrientation("left");
        else if (cmd.contains("right")) Cursor.SetOrientation("right");
        // show cursor
        Cursor.Show();
      }
      else if (cmd.contains('hand:hide')) {
        Cursor.Hide();
      }
      else if (cmd.contains('hand:left')) {
        Cursor.SetOrientation("left");
      }
      else if (cmd.contains('hand:right')) {
        Cursor.SetOrientation("right");
      }
    }
    else {
      //do something else
      console.error("Unhandled gesture command: " + cmd);
      //throw new Error("Unhandled command: " + cmd);
    }
  }

  return {
    Manager: Manager
  }
})();