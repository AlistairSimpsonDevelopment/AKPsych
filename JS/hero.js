jQuery(document).ready(function ($) {

function fullscreen() {
  jQuery('#hero').css({
    width: jQuery(window).width(),
    height: jQuery(window).height() });
}

fullscreen();

// Run the function in case of window resize
jQuery(window).resize(function () {
  fullscreen();
});

});
