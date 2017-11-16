//*******************************************
//  SENSORS CONTROLLER FILE
//*******************************************
var Sensors = (function () {
  
    /**
     * Central Manager for sensors commands
     * 
     * @param {string} cmd 
     */
    function Manager(cmd) {
  
      console.error("Unhandled sensor command: " + cmd);
  
    }
  
    return {
      Manager: Manager
    }
  })();
  