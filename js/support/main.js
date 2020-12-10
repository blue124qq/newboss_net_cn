var open_menu = document.getElementById('open_menu');
var t_menu = document.getElementById('t_menu');
var menu = document.getElementById('menu');
var display_1 = document.getElementById("display_1");
var display_2 = document.getElementById("display_2");
var display_3 = document.getElementById("display_3");
var style_1 = document.getElementById("style_1");

open_menu.onclick = function() {
  menu.style.cssText = "transform: translate3d(0%, 0, 0);";
  display_1.style.display = "block";
  display_2.style.display = "block";
  display_3.style.display = "block";
  style_1.style.cssText = "background-color: rgba(0,0,0,0.54);";
}

window.onclick = function(event) {
  if (event.target == style_1) {
    menu.style.cssText = "transform: translate3d(-104%, 0, 0);";
    display_1.style.display = "none";
    display_2.style.display = "none";
    display_3.style.display = "none";
    style_1.style.cssText = "background-color: rgba(0,0,0,0);";
  }
}

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 350, function(){
        window.location.hash = hash;
      });
    }
  });
});
