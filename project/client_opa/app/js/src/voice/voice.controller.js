//*******************************************
//  VOICE CONTROLLER FILE
//*******************************************
var Voice = (function () {

  /**
   * Central Manager for voice commands
   * 
   * @param {string} cmd 
   */
  function Manager(cmd) {

    console.error("Unhandled voice command: " + cmd);

  }

  return {
    Manager: Manager
  }
})();
