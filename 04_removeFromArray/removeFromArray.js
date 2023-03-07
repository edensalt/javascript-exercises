const removeFromArray = function(currentArray, ...criteria) { // composed of current array and removed variables
    return currentArray.filter((element) => {
        let isMatch = false;
        criteria.forEach((criterion) => {
            if (!criterion(element)) {
                isMatch = true;
            }
        });
        return isMatch;
    });
    
    // const newArray = currentArray.filter((currentArray) => {
    //     return currentArray !== removedObjects;
   //  })
   //  return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
