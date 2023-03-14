const findTheOldest = function(people) {

    // run a loop to calculate age

    people.forEach(person => {
        let age = person.yearOfDeath - person.yearOfBirth;
        
        if (isNaN(age)) {
            const today = new Date();
            const year = today.getFullYear();
            age = year - person.yearOfBirth;
        }

        person.age = age;
    });

    // sort the array to find the oldest person

    const ordered = people.sort((a, b) => a.age > b.age ? -1: 1);
    return ordered[0];

    // const ageSort = people.sort(function(a, b){return b.age - a.age});

    // return ageSort[0];
};

// Do not edit below this line
module.exports = findTheOldest;
