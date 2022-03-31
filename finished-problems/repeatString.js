/*Takes in string and number of times to repeat it on same line
IF (word is 0 OR empty value) THEN
word is empty value
IF (x is a negative number) THEN
return 'ERROR'*/
const repeatString = function(word, x) {
  let repeatedWord = word;
  if (x === 0 || word === '') {
    repeatedWord = '';
    return repeatedWord;
  } if (x < 0){
    return 'ERROR';
  }
    for (let i = 1; i < x; i++) {
      repeatedWord += word;  
     }
     return repeatedWord;
};

document.getElementById('output').textContent = repeatString(prompt('Enter text to be repeated:'), prompt('Enter the amount of times to repeat text:'));
// Do not edit below this line
module.exports = repeatString;
