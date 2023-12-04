function parseString() {
    if (arguments.length === 3 && !isNaN(arguments[0]) && !isNaN(arguments[1]) && !isNaN(arguments[2])) {
        // If there are exactly three numeric parameters, add them up
        var sum = parseFloat(arguments[0]) + parseFloat(arguments[1]) + parseFloat(arguments[2]);
        return sum;
    } else {
        // Otherwise, concatenate the strings
        var result = '';
        for (var i = 0; i < arguments.length; i++) {
            result += arguments[i] + ' ';
        }
        return result.trim();
    }
}

// Sample Input and Output
console.log(parseString("21", "24", "40")); // Output: 85
console.log(parseString("Hello", "Alpha")); // Output: Hello Alpha
console.log(parseString("Summer", "2022")); // Output: Summer 2022