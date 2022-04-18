const getTheTitles = function(obj) {
    const newArr = [];
    obj.forEach(book =>newArr.push(book.title));
    return newArr;
};
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
