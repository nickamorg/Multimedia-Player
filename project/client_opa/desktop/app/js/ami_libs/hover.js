//***************************************
// Add "isCollide" event listener
//***************************************
$(document).ready(function () {
  $("body").on("isCollide", ".clickableElement", function () {
    if (!$(this).isHovered()) {
      if (Cursor.IsLoadingNow()) Cursor.Destroy();
      $(this).hoverElement();
      Cursor.StartClick($(this));
    }
  });
});

//***************************************
// Hover Controller
//***************************************
var Hover = (function () {

  //---------------------------------------
  //#region PRIVATE METHODS

  /**
   * Returns all clickable elemets on current page
   * 
   * @returns All clickable elemets on current page
   */
  function GetActiveClickableElements() {
    var selector = '.pt-page-current .clickableElement:visible';
    return $(selector);
  }

  //#endregion
  //---------------------------------------

  //---------------------------------------
  //#region PUBLIC METHODS

  /**
   * Manages all clickable buttons in current page
   */
  function Manager() {
    var $cursor = $('#cursor span.cursor');
    var $clickableElement = GetActiveClickableElements();
    if ($clickableElement) {
      var $touchedBtn = $cursor.touching($clickableElement);
      if ($touchedBtn.length > 1) {
        $touchedBtn.first().trigger("isCollide");
      }
      else if ($touchedBtn.length == 1) {
        $touchedBtn.trigger("isCollide");
      }
      else {
        Cursor.Destroy();
      }
    }
    else {
      Cursor.Destroy();
    }
  }

  //#endregion
  //---------------------------------------

  return {
    Manager: Manager
  }
})();
