
function initMap() {
	var myLatLng = {lat: 51.43421, lng: -0.16276};

	var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 14
        });

	var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
		  animation: google.maps.Animation.DROP,
          title: ''
        });

	}
