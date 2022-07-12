interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Kev",
  age: 24,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  },
};

user1.greet("Hi there I`m ");

interface Named {
  readonly name: string;
}

interface Greetable {
  greeting(phrase: string): void;
}
class Dog implements Named, Greetable {
  name: string;
  age: number;
  greeting(phrase: string) {
    console.log(`${phrase}`);
  }
  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

interface Bernesee extends Named {
  breed: string;
}

interface AddFn {
  (a: number, b: number): number;
}
let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};
