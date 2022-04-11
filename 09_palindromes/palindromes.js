const palindromes = function (string) {
    const reverse = string.split("").reverse().join("");
    if (string===reverse) {
        return true;   
    }
    //return reverse;
};

// Do not edit below this line
module.exports = palindromes;
