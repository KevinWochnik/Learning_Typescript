const names: Array<string> = [];

const promise: Promise<string> = new Promise((res, rej) => {
  setTimeout(() => {
    res("done");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: "kev" }, { age: 24 }));

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length > 0) {
    descriptionText = "got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("hi there!"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert({ name: "kev" }, "name");

class StorageItems<T> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new StorageItems<string>();
textStorage.addItem("kev");
textStorage.addItem("angel");
textStorage.removeItem("kev");
console.log(textStorage.getItems());

const numberStorage = new StorageItems<number>();
numberStorage.addItem(2);
console.log(numberStorage.getItems());

const objStorage = new StorageItems<object>();
objStorage.addItem({ name: "kev" });
objStorage.addItem({ name: "angel" });
objStorage.removeItem({ name: "kev" });
console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeDate: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeDate = date;
  return courseGoal as CourseGoal;
}

const nameArray: Readonly<string[]> = ["kev", "idel"];
// nameArray.push("angel");
