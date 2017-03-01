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