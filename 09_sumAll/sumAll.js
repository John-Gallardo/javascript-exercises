const sumAll = function(startNum, endNum) {
    if (startNum < 0 || endNum < 0)
        return "ERROR";
    
    if (!Number.isInteger(startNum) || !Number.isInteger(endNum))
        return "ERROR";

    let sum = 0;
    if (startNum > endNum) 
        [startNum, endNum] = [endNum, startNum];

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
