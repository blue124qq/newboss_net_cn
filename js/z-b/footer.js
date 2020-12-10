$(document).ready(function() {

  if ($(window).width() < 770) {

    $('#footer-1-click').on('click',function(){
      $("#footer-1-content").slideToggle("slow", function() {
      });
      $('#footer-1-arrow').toggleClass('footer-rotate');
    });
    $('#footer-2-click').on('click',function(){
      $("#footer-2-content").slideToggle("slow", function() {
      });
      $('#footer-2-arrow').toggleClass('footer-rotate');
    });
    $('#footer-3-click').on('click',function(){
      $("#footer-3-content").slideToggle("slow", function() {
      });
      $('#footer-3-arrow').toggleClass('footer-rotate');
    });
    $('#footer-4-click').on('click',function(){
      $("#footer-4-content").slideToggle("slow", function() {
      });
      $('#footer-4-arrow').toggleClass('footer-rotate');
    });

  } else {

    $('#footer-1-content').show();
    $('#footer-2-content').show();
    $('#footer-3-content').show();
    $('#footer-4-content').show();

  }

});
