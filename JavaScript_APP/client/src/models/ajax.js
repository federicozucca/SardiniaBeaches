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