const repeatString = function(a, b) {
    let result = '';
    if (b < 0) {
        result = 'ERROR';
    } else {
        for (let i = 0; i < b; i++) {
            result += a;
        }
    } 
    return result;
};
repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;