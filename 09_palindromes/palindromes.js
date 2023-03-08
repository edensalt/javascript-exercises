const palindromes = function (word) {

    // remove non-letters from the word

    let lettersOnly = word.replaceAll(/[^a-zA-Z]/g, "");

    console.log(lettersOnly);

    // make the word all lowercase

    let forwardLower = lettersOnly.toLowerCase();

    console.log(forwardLower);
    
    // split the word into an array

    let forwardArray = forwardLower.split("");

    console.log(forwardArray);

    // reverse the array

    let backwardArray = forwardArray.reverse();

    console.log(backwardArray);

    // join the array into a backward word

    let backwardLower = backwardArray.join("");

    console.log(backwardLower);

    // check if backward and forward are the same

    if (forwardLower === backwardLower) {
        return true;
    } else return false;

}

// Do not edit below this line
module.exports = palindromes;
