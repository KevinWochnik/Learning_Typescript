/*abstract*/ class Department {
  //   private name: string;
  //   private id: string;
  //   private employees: string[] = ["jack", "angel"]; // DOSTĘPNY TYLKO Z POZIOMU KLASY

  constructor(
    protected readonly id: string,
    public name: string,
    protected employees: string[]
  ) {
    // this.name = n;
    // this.id = id;
  }
  describe(this: Department) {
    console.log(`${this.id}`);
    console.log(`Department: ` + this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
  // abstract smile(this: Department):void
}

const department = new Department("d1", "Accounting", ["angel"]);

// department.describe();
// department.addEmployee("kev");
// department.printEmployeeInfo();

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "ITs", ["jellyFish", "shrimp"]);
  }
  showAdmins() {
    console.log(this.admins);
  }
}
const itDep = new ITDepartment("d2", ["kev", "dog"]);
itDep.printEmployeeInfo();
itDep.showAdmins();

class AccountingDep extends Department {
  static year = 2022;
  private lastReport: string;
  private static instance: AccountingDep

  static createEmployee(name: string) {
    return { name };
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("no report found.");
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("please pass a value");
    }
    this.addReport(value);
  }
  describe() {
    console.log("the id is " + this.id);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Acc", ["hamster", "cat"]);
    this.lastReport = reports[0];
  }
  static getInstance(){
    if(AccountingDep.instance){
      return this.instance;
    }
    this.instance = new AccountingDep('s2', []);
    return this.instance
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport;
  }
  getReport() {
    console.log(this.reports);
  }
  addEmployee(name: string) {
    if (name === "kev") {
      return;
    } else {
      this.employees.push(name);
    }
  }
}

const employee1 = AccountingDep.createEmployee("adam");
console.log(employee1, AccountingDep.year);

// const accDep = new AccountingDep("d3", ["firstReport"]);
// accDep.mostRecentReport = "report2";
// console.log(`report - ${accDep.mostRecentReport}`);
// accDep.addReport("nothing");
// accDep.getReport();

// accDep.addEmployee("kev");
// accDep.addEmployee("bird");
// accDep.printEmployeeInfo();
// accDep.describe()