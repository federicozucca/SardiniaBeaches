var Beaches = require('../models/beaches');
var MapWrapper = require('../models/mapWrapper');
var Weather = require('../models/weather');
var ajax = require('../models/ajax')
;

var UI = function(){
  this.map = this.renderMap();
  this.beaches = new Beaches(this.map);
  var clearButton = document.querySelector("#button-clear");
  clearButton.style.visibility = 'hidden';
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