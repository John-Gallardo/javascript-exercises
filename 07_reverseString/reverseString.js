const reverseString = function(string) {
    // Done this way bec. README said to split.
    // probably would have just iterated through string backwards which should be faster (?)
    let newString = string.split("")
        .reverse()
        .join("");
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
