var Beach = require('./beach');
var ajax = require('./ajax');
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