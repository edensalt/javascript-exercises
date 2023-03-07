const repeatString = function(a, b) {
    let result = '';
    for (let i = 0; i < 3; i++) {
        result += a;
    }
    return result;
};
repeatString('hey', 3) // returns 'heyheyhey'
// Do not edit below this line
module.exports = repeatString;

