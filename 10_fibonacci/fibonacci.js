const fibonacci = function(entry) {

    // if number is string, convert to int

    let num = +entry;

    console.log(typeof num);

    // if number is negative, return error

    if (num < 0) return "OOPS";

    // set sequence array

    const sequence = new Array (1, 1);


    // run loop to get location of sequence

    for (let i = 2; i < num; i++) {
        let addNum = sequence[sequence.length -2] + sequence[sequence.length -1];
        sequence.push(addNum);
    }

    return sequence[sequence.length-1];

};

// Do not edit below this line
module.exports = fibonacci;
