const findTheOldest = function(people) {

    // run a loop to calculate age

    people.forEach(person => {
        let age = person.yearOfDeath - person.yearOfBirth;

        console.log(age);
        
        if (isNaN(age)) {
            const today = new Date();
            const year = today.getFullYear();
            age = year - person.yearOfBirth;
        }

        console.log(age);

        person.age = age;
    })

    console.log(people);

    // sort the array to find the oldest person

    const ageSort = people.sort(function(a, b){return b.age - a.age});

    return ageSort[0];
};

// Do not edit below this line
module.exports = findTheOldest;
