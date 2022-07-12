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
  name: "Kev",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log("Name " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start date " + emp.startDate);
  }
}

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }
  loadCargo(amount: number){
    console.log(`${amount}`)
  }
}

type Vehicle = Car|Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle:Vehicle){
    vehicle.drive();
    if('loadCargo' in vehicle){
        vehicle.loadCargo(5)
    }
}

