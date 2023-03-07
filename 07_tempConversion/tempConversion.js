const convertToCelsius = function(temp) {
  let newTemp = ((temp - 32) * (5/9));
  console.log(typeof newTemp);
  let newTempOneDecimal = parseFloat(newTemp.toFixed(1));
  return newTempOneDecimal;
};

const convertToFahrenheit = function(temp) {
  let newTemp = (((9/5) * temp) + 32);
  let newTempOneDecimal = parseFloat(newTemp.toFixed(1));
  return newTempOneDecimal;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
