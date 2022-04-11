const palindromes = function (string) {
    const reverse = string.toLowerCase().replace(/[^A-Za-z0-9]/g, "").split("").reverse().join("");
    return string === reverse ? true : false;  
    
};

// Do not edit below this line
module.exports = palindromes;
