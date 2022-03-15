/*PROGRAM sumAll
Takes in 2 integers
Use Math.max and Math.min on arguments and store in variables
create empty sum variable
WHILE (integers aren't  added up) DO
add numbers between the 2 parameters and store in sum variable
END
END*/
const sumAll = function(x,y) {
    let minNum = Math.min(x, y);
    const maxNum = Math.max(x, y);
    let sum = 0;
    let range = [];
 
    for(let i = minNum; i <= maxNum; i++) {
           range.push(i);

    }
    //console.log(range.reduce(addNums));
   return range.reduce((total, num) => {
       return total + num;
        
    });
    
};

// Do not edit below this line
module.exports = sumAll;
