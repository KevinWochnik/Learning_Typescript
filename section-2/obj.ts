// const person: {
//   name: string;
//   age: number;
// }
const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string] // TUPLE
} = {
  name: "Kevin",
  age: 24,
  hobbies: ["sports", "cookies"],
  role: [2, "author"],
};

// person.role.push("admin");
// person.role[1] = 10;

console.log(person.name);

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
};

const person2 = {
name: "Kevin",
age: 24,
hobbies: ["sports", "cookies"],
role: [2, "author"],
role2: Role.AUTHOR
};

if(person2.role2 = Role.AUTHOR){
  console.log('it works')
}
