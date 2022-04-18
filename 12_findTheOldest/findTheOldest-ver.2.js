const findTheOldest = function(obj) {
    let ages = [];                                               //Holds ages

      const determineAge = obj.map(person => {
        if (person.yearOfDeath == null) {                       //If person 
          const date = new Date();                              //hasn't died, 
          person.age = date.getFullYear() - person.yearOfBirth; //create age 
        }                                                       //key in people 
        if (person.age == null) {                               //obj  
          person.age = person.yearOfDeath - person.yearOfBirth; //Determines age 
        }                                                       
        ages.push(person.age);                                   
        return person;
      });
      const oldestAge = Math.max(...ages);                      //Gets oldest age

      for (let key in determineAge) {                           //Finds oldest
        if (determineAge[key].age === oldestAge) {              //person
            return determineAge[key];                          
        }
      }
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
  console.log(findTheOldest(people).name);
// Do not edit below this line
module.exports = findTheOldest;
