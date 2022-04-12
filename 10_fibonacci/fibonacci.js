const fibonacci = function(num) {
    return num < 0 ? "OOPS" : Math.round((Math.pow((1 + Math.sqrt(5)) / 2, num) - Math.pow((1 - Math.sqrt(5)) / 2, num)) / Math.sqrt(5));
};

// Do not edit below this line
module.exports = fibonacci;
