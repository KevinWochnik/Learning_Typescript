interface AddFn {
  (a: number, b: number): void;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public readonly name: string) {}
  greet(phrase: string): void {
    console.log("hello " + phrase);
  }
}

let user1: Person;

user1 = new Person("kev");
console.log(user1.name);

user1.greet("friend");

interface HasName {
  readonly name?: string;
  outputName?: string;
}
class Newer implements HasName {
  name?: string;
  age = 30;

  constructor(n: string) {
    if (n) {
      this.name = n;
    }
  }
}