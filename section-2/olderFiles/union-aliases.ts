type Combinable = number|string;
type ConversionDescriptor = "as-number" | "as-string";

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) => {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === "as-number") {
    result = +result;
  } else {
    result = result.toString();
  }
  return result;
};

const combineAges = combine(25, 10, "as-string");
console.log(combineAges);

const combinedName = combine("Max", "Ana", "as-number");
console.log(combinedName);
