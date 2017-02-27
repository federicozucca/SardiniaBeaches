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
	    // request.setRequestHeader("Access-Control-Allow-Origin",'*')
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
	
	MapWrapper.prototype ={
	
	  putMarkers:function(beaches){
	    for (var beach of beaches){
	      // console.log(beach)
	      // console.log("parseIntLAT:", parseFloat(beach.lat))
	      // console.log("parseIntLNG:", parseFloat(beach.lng))
	      this.addBeachMarker(beach)
	    }
	  },
	
	  addBeachMarker: function(beach){
	    var infoWindow = new google.maps.InfoWindow({
	
	      content: "<div class='beach-title'><p>Beach Name: <b>"+ beach.name +"</b></p><br><img src=images/"+ beach.img +" alt="+ beach.name +" style=\"width:300px;height:220px;\"><br><p>Parking Area: "+ beach.parking +"</p><p>Info: "+ beach.wiki +"</p></div>"
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
	      this.googleMap.setZoom(8);
	      var center = {lat:40.111672, lng:9.015906}
	      this.googleMap.setCenter(center);
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
	  button.onclick = handleClick;
	}
	
	Weather.prototype ={
	  handleClick:function(){
	  console.log("clicked")
	  }
	}
	
	module.exports = Weather;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map