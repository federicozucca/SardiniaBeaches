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