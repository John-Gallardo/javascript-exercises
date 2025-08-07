const fibonacci = function(number) {
    if (number < 0)
        return "OOPS";
    else if (number == 0)
        return 0;
    else if (number === 1 || number === 2)
        return 1;

    result = 1, fib_1 = 1, fib_2 = 1;  // fib_1 = fib-1, fib_2 = fib-2
    // i = 3 because case of fib(1) & fib(2) already dealt with
    for (let i = 3; i <= number; i++) {
        fib_2 = fib_1;
        fib_1 = result;
        result = fib_1 + fib_2;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
