const sumAll = function(startInt, endInt) { // set start and end int
    
    // return error if calculation cannot be made

    if (typeof startInt !== "number" || typeof endInt !== "number") {
        return "ERROR";
    
    // establish baseline for current total and current integer

    } let total = 0 ;
    let currentInt = 0;

    for (i = 0; i <= (endInt - startInt); i++) {
        currentInt++;
        total += currentInt;
    }
    
    return total;

};

// Do not edit below this line
module.exports = sumAll;
