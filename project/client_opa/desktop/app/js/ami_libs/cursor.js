//***************************************
// Cursor Controller
//***************************************
var Cursor = (function () {

  //---------------------------------------
  //#region PRIVATE VARIABLES

  var isLoadingCursor = false;  // indicates whether the cursor is loading
  var LoadingTimeout;           // loading timeout until click
  var isVisible = false;        // indicates whether the cursor is visivle

  // Specific classes that we don't want to click and
  // they have "clickableElement" class
  var RestrictedButtonClasses = []; //["myclass1", "myclass2"];

  //#endregion
  //---------------------------------------

  //---------------------------------------
  //#region PRIVATE METHODS

  /**
   * Check if selected element is restricted for click
   * 
   * @param {any} touchedBtn 
   * @returns {boolean}
   */
  //check is there are buttons restricted
  function CheckRestrictedButtons(touchedBtn) {
    var isRestricted = false;
    $.each(RestrictedButtonClasses, function (index, clazz) {
      var classes = clazz.split(" ");
      if (touchedBtn.hasClasses(classes)) isRestricted = true;
    });
    return isRestricted;
  }

  //#endregion
  //---------------------------------------

  //---------------------------------------
  //#region PUBLIC METHODS

  /**
   * Indicates whether the cursor is visivle
   * 
   * @returns {boolean}
   */
  function IsVisible() {
    return isVisible;
  }

  /**
   * Destroy cursor's loading for click
   */
  function Destroy() {
    $('body .hover').unhoverElement();
    if (isLoadingCursor) {
      clearTimeout(LoadingTimeout);
      $("#cursor .progressLoading").empty();
      isLoadingCursor = false;
    }
  }

  /**
   * Show cursor's image
   */
  function Show() {
    if (!isVisible) {
      $('#cursor').show();
      isVisible = true;
    }
  }

  /**
   * Hide cursor's image
   */
  function Hide() {
    Destroy();
    $('#cursor').hide();
    isVisible = false;
  }

  /**
   * Sets left or right hand orientation
   * 
   * @param {string} pos - left | right 
   */
  function SetOrientation(pos) {
    if (pos == "left") {
      $('#cursor .cursor').removeClass('right').addClass('left');
    }
    else if (pos == "right") {
      $('#cursor .cursor').removeClass('left').addClass('right');
    }
  }

  /**
   * Move curson on screen
   * 
   * @param {number} x - X-axe positon 
   * @param {number} y - y-axe position
   */
  function Move(x, y) {
    if (isVisible) {
      x = x - $('.cursor').height();
      y = y - $('.cursor').width();
      $("#cursor").css({ "top": x, "left": y });

      // Redirect to hover manager 
      // in order to find clickable elements
      // > hover.js file
      Hover.Manager();
    }
  }

  /**
   * Starts loading for click cursor
   * 
   * @param {any} touchedBtn - Clickable element selector
   */
  function StartClick(touchedBtn) {
    var isRestricted = CheckRestrictedButtons(touchedBtn);
    if (!isLoadingCursor && !isRestricted) {
      isLoadingCursor = true;
      $("#cursor .progressLoading").empty();

      var CircularLoader = new ProgressBar.Circle('#cursor .progressLoading', {
        color: GlobalConfig.Cursor.LoadingColor,
        strokeWidth: GlobalConfig.Cursor.LoadingStroke,
        easing: 'easeInOut',
        duration: GlobalConfig.Cursor.Duration
      });
      CircularLoader.animate(1, function () { });

      LoadingTimeout = setTimeout(function () {
        isLoadingCursor = false;
        $("#cursor .progressLoading").empty();
        touchedBtn.click();
      }, GlobalConfig.Cursor.Duration);
    }
  }

  /**
   * Indicates whether the cursor is loading for click
   * 
   * @returns {boolean}
   */
  function IsLoadingNow() {
    return isLoadingCursor;
  }

  //#endregion
  //---------------------------------------

  return {
    IsVisible: IsVisible,
    Destroy: Destroy,
    Show: Show,
    Hide: Hide,
    SetOrientation: SetOrientation,
    Move: Move,
    StartClick: StartClick,
    IsLoadingNow: IsLoadingNow
  }
})();

