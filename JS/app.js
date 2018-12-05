//hero images
jQuery(document).ready(function(e){function i(){jQuery(".hero").css({width:jQuery(window).width(),height:.98*jQuery(window).height()})}function h(){jQuery(".hero-2").css({width:jQuery(window).width(),height:jQuery(window).height()/1.8})}i(),h(),jQuery(window).resize(function(){i(),h()})});

//google maps
//function initMap(){var n={lat:51.43421,lng:-.16276},o=new google.maps.Map(document.getElementById("map"),{center:n,zoom:14});new google.maps.Marker({position:n,map:o,animation:google.maps.Animation.DROP,title:""})}


function initMap() {
  var locations = [
    ['The Awareness Center, Tooting <br>74-80 Upper Tooting Road <br>London <br>SW17 7PB', 51.43421, -.16276 ],
    ['37 Museum Street <br>London <br>WC1A 1LQ', 51.51809, -0.1280]
  ];

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.4886, lng: -0.1207},
      zoom: 12
    });
    var infowindow = new google.maps.InfoWindow();

    for (var i=0; i<locations.length; i++ ) {

      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map
      });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

    var locationBlocks = document.querySelectorAll('.locationBlock');
    for (var j = 0; j<locationBlocks.length; j++) {
        var locationBlock = locationBlocks[j];
        locationBlock.addEventListener('click', function() {

          var newLat = parseFloat(this.getAttribute('data-lat'));
          var newLng = parseFloat(this.getAttribute('data-lng'));;

            map.panTo({lat: newLat, lng: newLng});
            
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
