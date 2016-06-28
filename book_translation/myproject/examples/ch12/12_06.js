var weatherData;

function preload() {
  var temp = getTemp(weatherData);
  print(temp);
}

function setup() {
  var temp = getTemp(weatherData);
  print(temp);
}

function getTemp(data) {
  var list = data.list;
  var item = list[0];
  var main = item.main;
  var t = main.temp;
  return t;
}
