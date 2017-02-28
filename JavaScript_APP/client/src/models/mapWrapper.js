var MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
}

var markers = []


MapWrapper.prototype ={

  putMarkers:function(beaches){
    for (var beach of beaches){
      // console.log(beach)
      // console.log("parseIntLAT:", parseFloat(beach.lat))
      // console.log("parseIntLNG:", parseFloat(beach.lng))
      this.addBeachMarker(beach)
    }
  },

  addPlaneMarker:function(beach){
    var infoWindow = new google.maps.InfoWindow({

      content: "<div class='beach-title'><p>Airport Name: <b>"+ beach.airport.name +"</b></p></div>"
    });
    var iconPlane = {
      url: "http://downloadicons.net/sites/default/files/plane-symbol-icon-87732.png",
      scaledSize: new google.maps.Size(30, 30), 
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(30,30)
    };
    var marker = new google.maps.Marker({
      position: {lat: parseFloat(beach.airport.lat), lng: parseFloat(beach.airport.lng)},
      map: this.googleMap,
      animation: google.maps.Animation.DROP,
      icon: iconPlane
    })
    markers.push(marker);
  },

  addBoatMarker:function(beach){
    var infoWindow = new google.maps.InfoWindow({

      content: "<div class='beach-title'><p>Port Name: <b>"+ beach.port.name +"</b></p></div>"
    });
    var iconPlane = {
      url: "https://d30y9cdsu7xlg0.cloudfront.net/png/65037-200.png",
      scaledSize: new google.maps.Size(30, 30), 
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(30,30)
    };
    var marker = new google.maps.Marker({
      position: {lat: parseFloat(beach.port.lat), lng: parseFloat(beach.port.lng)},
      map: this.googleMap,
      animation: google.maps.Animation.DROP,
      icon: iconPlane
    })
    markers.push(marker);
  },

  setMapOnAll:function(map) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  },

  clearMarkers:function(beach) {
    this.setMapOnAll(null);
  },

  showData:function(beach){
    var showData =document.querySelector("#data");
    var ul = document.createElement("ul"); 
    var liName = document.createElement("li"); 
    liName.innerText = "Beach Name: " + beach.name
    var liTipology = document.createElement("li"); 
    liTipology.innerText = "Beach Tipology: " + beach.tipology
    var liParking = document.createElement("li");
    liParking.innerText = "Parking Area: " + beach.parking 
    var liWiki = document.createElement("li"); 
    liWiki.innerText = "Info: " + beach.wiki
    var liAirport = document.createElement("li");
    liAirport.innerText = "Nearest Airport: " + beach.airport.name
    var liPort = document.createElement("li");
    liPort.innerText = "Nearest Port: " + beach.port.name
    var img = document.createElement('img');
    img.src = "images/"+beach.img;
    showData.appendChild(ul);
    ul.appendChild(liName);
    ul.appendChild(liTipology);
    ul.appendChild(liParking);
    ul.appendChild(liWiki);
    ul.appendChild(liAirport);
    ul.appendChild(liPort);
    ul.appendChild(img);
  },

  showDataEnd:function(beach){
  var showData=document.querySelector('#data');
  showData.innerHTML=""
  },

  addBeachMarker: function(beach){
    var infoWindow = new google.maps.InfoWindow({

      content: "<div class='beach-title'><p>Beach Name: <b>"+ beach.name +"</b></p></div>"
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
      this.googleMap.setZoom(9);
      this.googleMap.setCenter(marker.getPosition());

      var detailsButton = document.querySelector("#button-details")
      detailsButton.style.visibility = 'visible';
      detailsButton.onclick = function(){this.showData(beach)}.bind(this)

      var airportButton = document.querySelector("#button-airport");
      airportButton.style.visibility = 'visible';
      airportButton.onclick = function(){this.addPlaneMarker(beach)}.bind(this)
      
      var portButton = document.querySelector("#button-port");
      portButton.style.visibility = 'visible';
      portButton.onclick = function(){this.addBoatMarker(beach)}.bind(this)
    }.bind(this));
   
    google.maps.event.addListener(infoWindow, 'closeclick', function() {
      this.googleMap.setZoom(8);
      var center = {lat:40.111672, lng:9.015906}
      this.googleMap.setCenter(center);
      var airportButton = document.querySelector("#button-airport");
      airportButton.style.visibility = 'hidden';
      var portButton = document.querySelector("#button-port");
      portButton.style.visibility = 'hidden';
      this.showDataEnd(beach)
      this.clearMarkers(beach)
    }.bind(this))

  },

  centreMap: function (coords, zoom){
    this.googleMap.setCenter(coords);
    this.googleMap.setZoom(zoom);
  }
}

module.exports = MapWrapper