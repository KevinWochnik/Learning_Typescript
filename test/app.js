const array = [1, 2, 5, 7, -2];

const suma = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(suma);

const average = array.reduce((accumulator, currentValue, index, array) => {
  accumulator += currentValue;
  if (index === array.length - 1) {
    accumulator / array.length;
    return accumulator;
  }
});
console.log(average);

const members = [1, 2, 3, 4, 5, 5, 3, 4];

const uniqueMembers = members.reduce((accumulator, currentValue) => {
  if (accumulator.indexOf(currentValue) === -1) accumulator.push(currentValue);
  return accumulator;
}, []);

console.log(uniqueMembers);

// (new Set(members)).size !== members.length

const formData = {
    name: 'kev',
    'a':'w',
    'b':'t',
    'c':'g'
}
Object.keys(formData).reduce
