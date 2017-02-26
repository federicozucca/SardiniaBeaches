var Beaches = require('../models/beaches');
var MapWrapper = require('../models/mapWrapper');
var ajax = require('../models/ajax')
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