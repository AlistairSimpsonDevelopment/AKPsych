//hero images
jQuery(document).ready(function(e){function i(){jQuery(".hero").css({width:jQuery(window).width(),height:.98*jQuery(window).height()})}function h(){jQuery(".hero-2").css({width:jQuery(window).width(),height:jQuery(window).height()/1.8})}i(),h(),jQuery(window).resize(function(){i(),h()})});

//google maps
//function initMap(){var n={lat:51.43421,lng:-.16276},o=new google.maps.Map(document.getElementById("map"),{center:n,zoom:14});new google.maps.Marker({position:n,map:o,animation:google.maps.Animation.DROP,title:""})}


function initMap() {
  var latlng;
  var maps = {"Tooting": {'lat': 51.43421,'lng': -.16276},
      "Holborn": {'lat': 51.51809,'lng': -0.1280}
    };
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.4925427, lng: -0.1228573},
      zoom: 10
    });
    for (var i=0; i<maps.length; i++ ) {

      var lat = maps[i].lat;
      var lng = maps[i].lng;
      var latlng = new google.maps.LatLng(lat, lng);

      var marker = new google.maps.Marker( {
        position: latlng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: maps[i]
      });

  }

}


// SmoothScroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});
});
});

//svg images
$(function(){jQuery("img.svg").each(function(){var t=jQuery(this),r=t.attr("id"),a=t.attr("class"),i=t.attr("src");jQuery.get(i,function(i){var e=jQuery(i).find("svg");void 0!==r&&(e=e.attr("id",r)),void 0!==a&&(e=e.attr("class",a+" replaced-svg")),!(e=e.removeAttr("xmlns:a")).attr("viewBox")&&e.attr("height")&&e.attr("width")&&e.attr("viewBox","0 0 "+e.attr("height")+" "+e.attr("width")),t.replaceWith(e)},"xml")})});
