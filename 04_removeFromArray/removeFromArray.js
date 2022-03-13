/*PROGRAM removeFromArray
Takes in an array
WHILE (array has not been fully cycled through) DO
IF (array elements are equal to arguments) THEN
Remove array elements
END
return array
END
END*/
const removeFromArray = function(array, ...value) {

      for (let i in value) {
         for (let x in array) {
         if (array[x] === value[i]) {
           array.splice(array.indexOf(array[x]), 1);
         }  
      }
   }   return array; 
};

const myArr = [1,2,3,4];

//document.getElementById('output').textContent = removeFromArray(myArr,1, 2);
// Do not edit below this line
module.exports = removeFromArray;
