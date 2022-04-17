const findTheOldest = function(obj) {
    let age = [];
    let objAge = {};
  
    const determineAge = obj.map(person => {
      if (!person.yearOfDeath) {
        const date = new Date();
        person.age = date.getFullYear() - person.yearOfBirth;
      }
      if (person.age == null) {
        person.age = person.yearOfDeath - person.yearOfBirth;
      }
     return person;
    })
    .sort((lastPerson, currentPerson) => {
      return lastPerson.age > currentPerson.age ? -1 : 1; 
    });
    return determineAge.at(0);
  }
  
  const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
    console.log(findTheOldest(people).name)
// Do not edit below this line
module.exports = findTheOldest;
