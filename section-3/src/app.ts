// const userName = "Max";
// userName = "Kev";

// let age = 25;
// age = 5;

function add(a: number, b: number) {
  var result;
  result = a + b;
  return result;
}


const hobbies = ['sport', 'cooking']
const active = [...hobbies, 'new']
console.log(active)

const adding = (...numbers:number[])=>{
    numbers.reduce((currentResult, currentValue)=>{
        return currentResult + currentValue
    },0)
};

const addedNumbers = adding(2,3,4,5,6)

const [first, second] = hobbies;

const numberArr = [1,2,3,4,5];
const [one,two,three,four,five] = numberArr

console.log(one)

const personObj:{
    names: string,
    age: number,
    type: string
} = {
    names: 'kev',
    age: 24,
    type: 'programming'
}

const {names,age,type} = personObj;

console.log(names,age,type)

