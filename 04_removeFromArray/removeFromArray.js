const removeFromArray = function(array, ...value) {
 
  const newArr = [];
  // for (let x = 0; x < array.length -1; x++) {
      for (let i in value) {
         if(array[i] != value[i]) {
           array.splice(array.indexOf(value[i]), 1);
         }  
    //  }
   }   return array; 
};

const myArr = [1,2,3,4];

//document.getElementById('output').textContent = removeFromArray(myArr,1, 2);
// Do not edit below this line
module.exports = removeFromArray;
/*PROGRAM removeFromArray
Takes in an array
WHILE (array has not been fully cycled through) DO
IF (array elements are equal to arguments) THEN
Remove array elements
END
return array
END
END*/