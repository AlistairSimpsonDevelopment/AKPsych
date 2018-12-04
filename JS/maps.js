//function initMap(){var n={lat:51.43421,lng:-.16276},o=new google.maps.Map(document.getElementById("map"),{center:n,zoom:14});new google.maps.Marker({position:n,map:o,animation:google.maps.Animation.DROP,title:""})}

function initMap() {
  var maps = [
      "Tooting": ['lat': 51.43421,'lng': -.16276],
      "Holborn": ['lat': 51.51809,'lng': -0.1280]
    ]
    console.log(maps);

for (var i=0; i<maps.length); i++ ) {
      console.log(maps[i];

  }
}
/*
      var map = new google.maps.Map(document.getElementById('map'+mapCoords[i]'), {
        center: mapCoords[i],
        zoom: 12
      });
      var marker = new google.maps.Marker( {
        position: mapCoords[i],
        map: map,
        animation: google.maps.Animation.DROP,
        title: ""
      });
    }
}

var map = new google.maps.Map(document.getElementById('map'), {
  center: mapCoords["Tooting"],
  zoom: 12
});

var map2 = new googlemaps.Map(document.getElementById('map-2'), {
  center: mapCoords["Holborn"],
  zoom: 12
});

var marker = new google.maps.Marker( {
  position: mapCoords["Tooting"],
  map: map,
  animation: google.maps.Animation.DROP,
  title: ""
});

var marker2 = new google.maps.Marker( {
   position: mapCoords["Tooting"],
   map: map2,
   animation: google.maps.Animation.DROP,
   title: ""
});

}
*/
