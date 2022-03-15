/*PROGRAM sumAll
Takes in 2 integers
Use Math.max and Math.min on arguments and store in variables
create empty sum variable
WHILE (integers aren't  added up) DO
Add numbers between the 2 parameters to an array
END
Use reduce method on array
END*/
const sumAll = function(x,y) {
    if (x < 0 || y < 0 || typeof(x) !== "number"|| typeof(y) !== "number") {
        return "ERROR";
    }
     
    let minNum = Math.min(x, y);
    const maxNum = Math.max(x, y);
    let range = [];

    for(; minNum <= maxNum; minNum++) {
        range.push(minNum);
    }
        return range.reduce((total, num) => {
            return total + num;   
         });
    }
    
 
    


// Do not edit below this line
module.exports = sumAll;
