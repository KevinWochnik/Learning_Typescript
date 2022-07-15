abstract class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(public name: string, protected readonly id: string) {}

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
  static createEmployee(name: string) {
    console.log(name);
  }
}
// const accounting = new Department("d1", "accounting");
// console.log(accounting);

// accounting.addEmployee("angel");
// accounting.addEmployee("idel");
// accounting.printEmployeeInfo();

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super("IT", id);
  }

  describe(): void {
    console.log("it department");
  }
}
const itDepartment = new ITDepartment("d2", ["kev", "angel"]);

itDepartment.addEmployee("ines");
itDepartment.addEmployee("jenny");

itDepartment.printEmployeeInfo();

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("no report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("please add a valid value");
    }
    this.addReport(value);
  }
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d3", ["foodForDog"])
    return this.instance
  }

  private constructor(id: string, private reports: string[]) {
    super("accounting", id);
    this.lastReport = reports[0];
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  addReport(r: string) {
    this.reports.push(r);
    this.lastReport = r;
  }
  getReports() {
    console.log(this.reports);
  }
  describe() {
    console.log("this id is" + this.id);
  }
}

const newAccountingDepartment = AccountingDepartment.getInstance();
newAccountingDepartment.addReport("buy milk for the cat");
newAccountingDepartment.getReports();
newAccountingDepartment.addEmployee("sam");
newAccountingDepartment.printEmployeeInfo();

console.log(newAccountingDepartment.mostRecentReport);
newAccountingDepartment.mostRecentReport = "car wash";

newAccountingDepartment.getReports();

Department.createEmployee("kev");
console.log(Department.fiscalYear);
newAccountingDepartment.describe();

// const acountingCopy = { name: "steve", describe: accounting.describe };
// acountingCopy.describe();
