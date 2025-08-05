const removeFromArray = function(array, ...removeTargets) {
    let newArray = [];
    array.forEach((element) => {if (!removeTargets.includes(element)) newArray.push(element)});
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
