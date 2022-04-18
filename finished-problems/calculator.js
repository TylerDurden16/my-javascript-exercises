/*PROGRAM calculator
Takes in numbers
Adds up */


const add = function(...args) {
  return args.reduce((total, currentNum) => total + currentNum);	
};

const subtract = function(...args) {
	return args.reduce((total, current) => total - current);
};

const sum = function(...args) {
  const array = args[0];
  let total = 0;
  for (let i = 0; i < array.length; i++) {
   total += array[i]; 
 } 
  return total;
};



const multiply = function(...args) {
  const array = args[0];
  return array.reduce((total, current) => total * current);
};

const power = function(x,y) {
	return Math.pow(x,y);
};

const factorial = function(num) {
  let x = num;
  if (x === 0) {
    return 1;
  }
  for (x; x >= 2; x--) {
    num *= (x-1);
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
