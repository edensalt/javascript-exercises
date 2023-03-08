const findTheOldest = function(people) {

    // run a loop to calculate age

    people.forEach(person => {
        if (typeof person.yearOfDeath === undefined) {
            const today = new Date();
            const year = today.getFullYear();
            age = year - person.yearOfBirth;
        } else age = person.yearOfDeath - person.yearOfBirth;
        person.age = age;
    })

    console.log(people);

    // sort the array to find the oldest person

    const ageSort = people.sort(function(a, b){return b.age - a.age});

    console.log(people);

    return ageSort[0];
};

// Do not edit below this line
module.exports = findTheOldest;
