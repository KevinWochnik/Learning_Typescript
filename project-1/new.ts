type nums = number | string;

function combine(input1: number, input2: number) {
  const result = input1 + input2;
  return result;
}

const combineAges = combine(20, 26);
console.log(combineAges);

const person: {
  name: string;
  age: number;
} = {
  name: "kev",
  age: 24,
};
