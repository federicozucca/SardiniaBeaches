var MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
}


MapWrapper.prototype ={

  putMarkers:function(beaches){
    for (var beach of beaches){
      console.log(beach)
      console.log("parseIntLAT:", parseFloat(beach.lat))
      console.log("parseIntLNG:", parseFloat(beach.lng))
      this.addMarker(beach)
    }
  },

  addMarker: function(beach){
    var infoWindow = new google.maps.InfoWindow({

      content: "<div class='beach-title'><p>Beach Name: <b>"+ beach.name +"</b></p><br><img src="+ beach.img +" alt="+ beach.name +" style=\"width:304px;height:228px;\"><br><p>Beach Lat: "+ beach.lat +"</p><p>Beach Lng: "+ beach.lng +"</p></div>"
    });

    var iconUmbrella = {
      url: "http://www.iconeasy.com/icon/ico/Leisure/Beach%201/sun%20umbrella.ico",
      scaledSize: new google.maps.Size(30, 30), 
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(30,30)
    };
    var marker = new google.maps.Marker({
      position: {lat: parseFloat(beach.lat), lng: parseFloat(beach.lng)},
      map: this.googleMap,
      animation: google.maps.Animation.DROP,
      icon: iconUmbrella,
      name: beach.name,
    });
    marker.addListener('click', function (){
      infoWindow.open(this.googleMap, marker);
      this.googleMap.setZoom(10);
      this.googleMap.setCenter(marker.getPosition());
    }.bind(this));
    google.maps.event.addListener(infoWindow, 'closeclick', function() {
      console.log("InfoWindow Closed")
      this.googleMap.setZoom(8);
      var center = {lat:40.111672, lng:9.015906}
      this.googleMap.setCenter(center);
    }.bind(this))
  },

  centreMap: function (coords, zoom){
    this.googleMap.setCenter(coords);
    this.googleMap.setZoom(zoom);
  },

}

module.exports = MapWrapper