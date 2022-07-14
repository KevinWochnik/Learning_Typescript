type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "",
  privileges: ["c"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function adding(a: number, b: number): number;
function adding(a: string, b: string): string;

// TYPE GUARDS
function adding(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = adding("kev", "woc");
result.split("");

type UnknownEmployee = Employee | Admin; //UNION TYPE

function printEmpInf(emp: UnknownEmployee) {
  console.log("name" + emp.name);

  // TYPE GUARD
  if ("privileges" in emp) {
    console.log("privileges " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("startDate " + emp.startDate);
  }
}
printEmpInf(e1);

class Motor {
  drive() {
    console.log("Driving...");
  }
}
class Trolly {
  drive() {
    console.log("Driving a trolly");
  }
  loadCargo(amount: number) {
    console.log("Loading Cargo  " + amount);
  }
}

type Vehicle = Motor | Trolly;

const v1 = new Motor();
const v2 = new Trolly();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Trolly) {
    vehicle.loadCargo(2);
  }
}

//

//

interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("the speed " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 20 });

// TYPE CASTING
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElement.value = "Hi there";

interface ErrorContainer {
  [prop: string]: string;
}
const errorBag: ErrorContainer = {
  email: "not a valid email",
};

// OPTIONAL CHAINING

const fetchedUserData = {
  id: "u1",
  name: "kev",
  job: { title: "CEO", description: "My own company" },
};


console.log(fetchedUserData?.job?.title)
