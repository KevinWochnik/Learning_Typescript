// const arr = [1,2,3,5];
// for(var i = 0;i<arr.length;i++){
//     setTimeout(function(){
//         console.log(`index ${i}, element ${arr[i]}`)
//     })
// }

// THEN CATCH

// const promise = new Promise((resolve,reject)=>{
//     if(false){
//         return resolve('works')
//     }
//     else{
//         return reject('works either')
//     }
// })

// promise.then(data=>console.log(data)).catch(err=>console.log(err))

const items = [
  {
    name: "rice",
    price: 26,
  },
  {
    name: "rice",
    price: 31,
  },
  {
    name: "rice",
    price: 42,
  },
  {
    name: "rice",
    price: 42,
  },
];

const people = [
  {
    name: "rice",
    age: 26,
  },
  {
    name: "rice",
    age: 31,
  },
  {
    name: "rice",
    age: 42,
  },
  {
    name: "rice",
    age: 42,
  },
];

// const totalPrice = items.reduce((total, item)=>{
//     console.log(`total:${total}`)
//     console.log(`item:${item.price}`)
//     return total + item.price
// },0)
// console.log(totalPrice)


const groupedPeople = people.reduce((groupedPeople, person)=>{
    const age = person.age
    if(groupedPeople[age]==null){
        groupedPeople[age] = []
    }
    groupedPeople[age].push(person)
    return groupedPeople
}, {})

// console.log(groupedPeople)


const num = [1,3,5]

const numbero = num.reduce((total,number, index, array)=>{
    return total + number
},0)
console.log(numbero)

