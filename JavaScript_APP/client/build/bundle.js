/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var UI = __webpack_require__(1);
	
	var app = function() {
	  new UI();
	};
	
	
	window.onload = app;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Beaches = __webpack_require__(2);
	var MapWrapper = __webpack_require__(5);
	var Weather = __webpack_require__(6);
	var ajax = __webpack_require__(4)
	;
	
	var UI = function(){
	  this.map = this.renderMap();
	  this.beaches = new Beaches(this.map);
	  var detailsButton = document.querySelector("#button-details");
	  detailsButton.style.visibility = 'hidden';
	  var airportButton = document.querySelector("#button-airport");
	  airportButton.style.visibility = 'hidden';
	  var portButton = document.querySelector("#button-port");
	  portButton.style.visibility = 'hidden';
	  var button = document.querySelector('#button');
	  button.style.visibility = 'hidden';
	
	  new Weather();
	}
	
	
	UI.prototype = {
	  renderMap: function () {
	    var mapDiv = document.querySelector('#main-map');
	    var center = {lat:40.111672, lng:9.015906};
	      var map = new MapWrapper(mapDiv, center, 8);
	      return map;
	    }
	
	 };
	
	module.exports = UI;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Beach = __webpack_require__(3);
	var ajax = __webpack_require__(4);
	var beaches;
	
	var Beaches = function(map) {
	  var url = "http://localhost:5000/api/beaches";
	  var self = this;
	  this.beachDetails = [];
	  ajax.makeRequest(url, function() {
	    if (this.status !==200) return;
	    var jsonString = this.responseText;
	    beaches = JSON.parse(jsonString);
	    map.putMarkers(beaches);
	  });
	};
	
	
	Beaches.prototype = {
	
	}
	
	
	module.exports = Beaches;

/***/ },
/* 3 */
/***/ function(module, exports) {

	var Beach = function(name, tipology, lat, lng, img, parking, wiki, territory) {
	    this.name = name;
	    this.tipology = tipology;
	    this.lat = lat;
	    this.lng = lng;
	    this.img = img;
	    this.parking = parking;
	    this.wiki = wiki;
	    this.territory = territory;
	
	}
	
	module.exports = Beach;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var ajax = { 
	
	  makeRequest: function(url, callback) {
	    var request = new XMLHttpRequest();
	    request.open("GET",url);
	    request.setRequestHeader('Content-Type', 'application/json');
	    request.onload = callback;
	    request.send();
	  }
	
	}
	
	module.exports = ajax;

/***/ },
/* 5 */
/***/ function(module, exports) {

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
	    var liName = document.querySelector("#liName")
	
	
	      var showData =document.querySelector("#data");
	      var ul = document.createElement("ul"); 
	      if (liName === null){
	        var liName = document.createElement("li"); 
	        liName.id = "liName"
	        liName.innerText = "Beach Name: " + beach.name
	        ul.appendChild(liName);
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
	        img.id= "images"
	        showData.appendChild(ul);
	        ul.appendChild(liTipology);
	        ul.appendChild(liParking);
	        ul.appendChild(liWiki);
	        ul.appendChild(liAirport);
	        ul.appendChild(liPort);
	        ul.appendChild(img);}
	
	      },
	
	      showDataEnd:function(beach){
	        var showData=document.querySelector('#data');
	        showData.innerHTML=""
	        var showWeather=document.querySelector('#beach-forecast');
	        showWeather.innerHTML=""
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
	          localStorage.setItem('territory', beach.territory);
	
	          var button = document.querySelector('#button');
	          button.style.visibility = 'visible';
	
	        }.bind(this));
	
	        google.maps.event.addListener(infoWindow, 'closeclick', function() {
	          this.googleMap.setZoom(8);
	          var center = {lat:40.111672, lng:9.015906}
	          this.googleMap.setCenter(center);
	          var detailsButton = document.querySelector("#button-details")
	          detailsButton.style.visibility = 'hidden';
	          var airportButton = document.querySelector("#button-airport");
	          airportButton.style.visibility = 'hidden';
	          var portButton = document.querySelector("#button-port");
	          portButton.style.visibility = 'hidden';
	          var button = document.querySelector('#button');
	          button.style.visibility = 'hidden';
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

/***/ },
/* 6 */
/***/ function(module, exports) {

	var Weather = function(){
	  var button = document.querySelector('#button');
	  button.onclick = this.handleClick.bind(this);
	}
	
	Weather.prototype ={
	  handleClick:function(){
	    var self = this
	    var beachTerritory = localStorage.territory;
	  console.log(beachTerritory)
	    var url = 'http://api.openweathermap.org/data/2.5/forecast?q='+ beachTerritory +'&appid=3812579c7d28b0654d45fd07c3afafd6';
	    this.makeRequest(url,   function() {
	      if(this.status !== 200) return;
	        var jsonString = this.responseText;
	        var data = JSON.parse(jsonString);
	        self.displayWeather(data);
	    })
	},
	
	makeRequest: function(url, callback){
	  var request = new XMLHttpRequest();
	  request.open('GET', url);
	  request.onload = callback;
	  request.send();
	},
	
	displayWeather:function(data){
	  var liDescription = document.querySelector("#weather-descr")
	
	  var beachForecast = document.querySelector('#beach-forecast');
	  var ul = document.createElement('ul');
	  console.log("weather location: ",data.city.name)
	
	  if(liDescription === null){
	  var liDescription = document.createElement('li');
	  liDescription.id="weather-descr";
	  liDescription.innerText = data.list[0].weather[0].description;
	  
	  var imgWeather = document.createElement('img')
	  var descr = data.list[0].weather[0].description
	  if ( descr === 'light rain'| descr === 'moderate rain' | descr === 'heavy intensity rain'| descr === 'very heavy rain' | descr === 'extreme rain'){
	    var img = "10d"}
	  else if (descr === 'light intensity shower rain' | descr === 'shower rain' | descr === 'heavy intensity shower rain' | descr === 'ragged shower rain' | descr === 'light intensity drizzle' | descr === 'drizzle' | descr === 'heavy intensity drizzle' | descr === 'light intensity drizzle rain' | descr === 'drizzle rain' | descr === 'heavy intensity drizzle rain' | descr === 'shower rain and drizzle' | descr === 'heavy shower rain and drizzle' | descr === 'shower drizzle'){
	    var img = "9d"}
	  else if (descr === 'freezing rain' | descr === 'light snow' | descr === 'snow' | descr === 'heavy snow ' | descr === 'sleet' | descr === 'shower sleet' | descr === 'light rain and snow' | descr === 'rain and snow' | descr === 'light shower snow' | descr === 'shower snow' | descr === 'heavy shower snow'){
	    var img = "13d"}
	  else if (descr === 'thunderstorm with light rain' | descr === 'thunderstorm with rain' | descr === 'thunderstorm with heavy rain' | descr === 'light thunderstorm' | descr === 'thunderstorm' | descr === 'heavy thunderstorm' | descr === 'ragged thunderstorm' | descr === 'thunderstorm with light drizzle' | descr === 'thunderstorm with drizzle' | descr === 'thunderstorm with heavy drizzle'){
	    var img = "11d"}
	    else if (descr === 'clear sky'){
	    var img = "01d"} 
	    else if (descr === 'mist' | descr === 'smoke' | descr === 'haze ' | descr === 'sand, dust whirls' | descr === 'fog' | descr === 'sand' | descr === 'dust' | descr === 'volcanic ash' | descr === 'squalls' | descr === 'tornado'){
	    var img = "11d"}
	    else if (descr === 'broken clouds' | descr === 'overcast clouds' ){
	    var img = "04d"}
	    else if (descr === 'few clouds' ){
	    var img = "02d"}
	    else if (descr === 'scattered clouds' ){
	    var img = "03d"}
	
	  imgWeather.src = "images/weather/"+ img +".png";
	  var liTemp = document.createElement('li');
	  liTemp.innerText = "Temperature:" + Math.round(data.list[0].main.temp - 273.15) + "°C";
	  var liWind = document.createElement('li');
	
	  liWind.innerText = "Wind Speed:"+ Math.round(data.list[0].wind.speed) + " mph";
	  beachForecast.appendChild(ul);
	  ul.appendChild(liDescription);
	  ul.appendChild(imgWeather);
	  ul.appendChild(liTemp);
	  ul.appendChild(liWind);
	  }
	}
	
	}
	
	module.exports = Weather;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map