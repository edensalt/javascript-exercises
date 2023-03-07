const palindromes = function (word) {

    // split the word into an array

    let palTest = word.toLowerCase().split("");

    // make the forward word just letters

    let palForward = palTest.join("");

    // make the backward word just letters, reversed

    let palBackward = palTest.reverse().join("");

    if (palForward === palBackward) {
        return true;
    } else return false;

};

// Do not edit below this line
module.exports = palindromes;
