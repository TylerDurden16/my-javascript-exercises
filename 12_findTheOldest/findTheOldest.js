const findTheOldest = function(obj) {

   const determineAge = obj.map(person => {                   
      if (person.yearOfDeath == null) {                       //If person hasn't 
        const date = new Date();                              //died, create age
        person.age = date.getFullYear() - person.yearOfBirth; //key in people
      }                                                       //obj 
      if (person.age == null) {                              
        person.age = person.yearOfDeath - person.yearOfBirth; //Determines age
      }                                                      
     return person;
    })
    .sort((lastPerson, currentPerson) => {                   //Sort by oldest
      return lastPerson.age > currentPerson.age ? -1 : 1;    //age     
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
