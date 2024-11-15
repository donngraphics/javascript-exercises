const convertToCelsius = function (fahNum) {


  //  (32°F − 32) × 5/9 = 0°C
  let celConvert = (fahNum - 32) * 5 / 9;

  let roundCelConvert = Math.round(celConvert * 100) / 100;


  return +roundCelConvert.toFixed(1);


};

const convertToFahrenheit = function (celsiusNum) {


  //(0°C × 9/5) + 32 = 32°F

  let fahConvert = (celsiusNum * 9 / 5) + 32;

  let roundFahConvert = Math.round(fahConvert * 100) / 100;


  return +roundFahConvert.toFixed(1);

};




// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
