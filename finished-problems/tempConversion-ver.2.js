const ftoc = function(fahrToCel) {
  const celsius = (fahrToCel -32) * 5/9;
  const roundCel = Math.pow(10, 1)
  return Math.round(celsius * roundCel) / roundCel;
};

const ctof = function(celToFahr) {
  const fahrenheit = (celToFahr * 9/5) + 32;
  const roundFahr = Math.pow(10, 1);
  return Math.round(fahrenheit * roundFahr) / roundFahr;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
