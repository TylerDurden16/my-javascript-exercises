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
    let sum = 1;
    let iterator = Math.min(x, y);
    //console.log(minNum);
    //console.log(maxNum);
    for(let i = iterator; i < maxNum; i++) {
        
        //let newNum2 = minNum + 1;
        let addNum = minNum += 1;
        console.log(addNum);
        sum += addNum;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
