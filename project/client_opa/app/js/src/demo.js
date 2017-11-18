$(document).ready(function () {

  //---------------------------------------
  //#region Demo Button Clicks

  $('.demoBtn').click(function () {
    $(this).toggleClass('checked')
  });

  $('.demoBtn2').click(function () {
    // Tip: try other integers [1-67] at PageTransitions.goToPage function
    // and see different animations on changing pages
    PageTransitions.goToPage(1, 'page2');
  });

  $('.demoBtn3').click(function () {
    // Tip: try other integers [1-67] at PageTransitions.goToPage function
    // and see different animations on changing pages
    PageTransitions.goToPage(2, 'page1');
  });

  //#endregion
  //---------------------------------------

});