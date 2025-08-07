const findTheOldest = function(people) {
    let oldest = null, oldestIndex = null, currentYear = new Date().getFullYear(), age = null;
    for (person of people) {
        if ("yearOfDeath" in person)
            age = person.yearOfDeath - person.yearOfBirth;
        else 
            age = currentYear - person.yearOfBirth;

        if (age > oldest) {
            oldest = age;
            oldestIndex = people.indexOf(person);
        }
    }
    return people[oldestIndex];

};

// Do not edit below this line
module.exports = findTheOldest;
