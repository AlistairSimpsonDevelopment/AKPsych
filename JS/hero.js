jQuery(document).ready(function ($) {

function fullscreen() {
  jQuery('#hero').css({
    width: jQuery(window).width(),
    height: jQuery(window).height() });
}

function halfscreen() {
  jQuery('#hero-2').css({
    width: jQuery(window).width(),
    height: jQuery(window).height()/1.8 });
}

fullscreen();
halfscreen();

// Run the function in case of window resize
jQuery(window).resize(function () {
  fullscreen();
  halfscreen();
});

});
