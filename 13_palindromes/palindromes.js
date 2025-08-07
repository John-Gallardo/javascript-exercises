const palindromes = function (string) {
    string = string.toLowerCase();  // make case insensitive
    string = string.replace(/[^\w\s]/gi, "");  // remove all punctuation
    string = string.replaceAll(" ", "")  // remove all space

    let reversedString = string.split('').reverse().join('');
    if (reversedString == string)
        return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
