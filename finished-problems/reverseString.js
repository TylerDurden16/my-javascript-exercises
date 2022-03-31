/*take in string
Declare empty string
WHILE(iterator is greater or equal to 0) DO
use string method on variable to reverse and add each character to empty string variable
END
return variable
END
*/
const reverseString = function(word) {
    let i = word.length;
    let wordReversed = '';

    while (i >= 0) {
        wordReversed += word.charAt(i);
        i--;    
    } return wordReversed;
};

document.getElementById('output').textContent = reverseString(prompt('Enter a word:'));
// Do not edit below this line
module.exports = reverseString;
