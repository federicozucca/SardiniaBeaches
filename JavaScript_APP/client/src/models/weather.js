var Weather = function(){
  var button = document.querySelector('#button');
  button.onclick = this.handleClick;
}

Weather.prototype ={
  handleClick:function(){
  console.log("clicked")
  }
}

module.exports = Weather;