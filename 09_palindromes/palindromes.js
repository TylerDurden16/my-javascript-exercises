const palindromes = function (str) {
   const string = str.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
   const reverse = string.split("").reverse().join("");
   return string === reverse ? true : false;  
};

// Do not edit below this line
module.exports = palindromes;
