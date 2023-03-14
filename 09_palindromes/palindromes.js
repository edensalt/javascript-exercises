const palindromes = function (word) {
    const wordForward = word.toLowerCase().replaceAll(/[^a-zA-Z]/g, "");
    console.log(wordForward);
    return wordBackward = wordForward.split("").reverse().join("") == wordForward;
};

// Do not edit below this line
module.exports = palindromes;
