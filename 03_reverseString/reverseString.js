const reverseString = function(string) {
    let word = '';
    for (i = string.length - 1; i>=0; i--) {  // While the string still has letters in it (i.e. longer than it's full length)
        word += string.slice((i),(i+1));  // Slice off the last letter and add it to a new element
    }
    return word;
};

// Do not edit below this line
module.exports = reverseString;
