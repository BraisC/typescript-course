// const names: Array<string> = []; // Same as string[]

// names[0].split(' ');

// const promise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// });

// promise.then((data) => data.split(' '));

// function merge<T extends Record<string, unknown>, U extends Record<string, unknown>>(
//   objA: T,
//   objB: U
// ) {
//   return { ...objA, ...objB };
// }

// const mergedObj = merge({ name: 'Max' }, { age: 30 });

// console.log(mergedObj.age);

// type Lengthy = {
//   length: number;
// };

// function countAndPrint<T extends Lengthy>(element: T): [T, string] {
//   let descriptionText = 'Got no value.';
//   element.length > 0 && (descriptionText = `Got ${element.length} elements`);
//   return [element, descriptionText];
// }

// console.log(countAndPrint('Hi there!'));

// function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
//   return obj[key];
// }

// console.log(extractAndConvert({ name: 'paco' }, 'name'));

// class DataStorage<T extends number | string | boolean> {
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }

//   removeItem(item: T) {
//     if (this.data.indexOf(item)) return;
//     this.data.splice(this.data.indexOf(item), 1);
//   }

//   getItems() {
//     return [...this.data];
//   }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem('Max');
// textStorage.getItems();

type CourseGoal = {
  title: string;
  description: string;
  completeUntil: Date;
};

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  const courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

const names: Readonly<Array<string>> = ['Max', 'Anna'];

names.push('Peter');
