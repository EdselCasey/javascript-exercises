const convertToCelsius = function(farenheit) {
  let result = ((farenheit - 32)*5) / 9
   let roundednum = result.toFixed(1);
   let celsius = parseFloat(roundednum);
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let result = (celsius * 1.8) + 32
  let roundednum = result.toFixed(1)
  let farenheit = parseFloat(roundednum);
  return farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
