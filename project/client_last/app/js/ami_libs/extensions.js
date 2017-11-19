
//---------------------------------------
//#region Hover Methods

// Hover element (add class hover)
$.fn.hoverScopeElement = function ($family) {
  $family.unhoverElement();
  this.addClass('hover');
  $(this).trigger("onHoverElement");
  return this;
}
$.fn.hoverElement = function () {
  this.addClass('hover');
  $(this).trigger("onHoverElement");
  return this;
}
$.fn.unhoverElement = function () {
  this.removeClass('hover');
  $(this).trigger("onUnHoverElement");
  return this;
}
$.fn.isHovered = function () {
  return $(this).hasClass("hover");
}

//#endregion
//---------------------------------------

//---------------------------------------
//#region Class Methods

//checks if element has multiple classes
// e.g.: $('#element').hasClasses(['class1', 'class2', 'class3']);
$.fn.hasClasses = function (selectors) {
  var self = this;
  for (var i in selectors) {
    if (!$(self).hasClass(selectors[i]))
      return false;
  }
  return true;
}

//#endregion
//---------------------------------------

//---------------------------------------
//#region String Methods

//Extends string and impement contains
if (!String.prototype.contains) {
  String.prototype.contains = function (search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

//Extends string and capitalize first letter
if (!String.prototype.capitalizeFirstLetter) {
  String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }
}

//#endregion
//---------------------------------------
