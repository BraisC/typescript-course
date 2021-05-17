// const names: Array<string> = []; // Same as string[]

// names[0].split(' ');

// const promise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// });

// promise.then((data) => data.split(' '));

function merge<T extends Record<string, unknown>, U extends Record<string, unknown>>(
  objA: T,
  objB: U
) {
  return { ...objA, ...objB };
}

const mergedObj = merge({ name: 'Max' }, { age: 30 });

console.log(mergedObj.age);

type Lengthy = {
  length: number;
};

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  element.length > 0 && (descriptionText = `Got ${element.length} elements`);
  return [element, descriptionText];
}

console.log(countAndPrint('Hi there!'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

console.log(extractAndConvert({ name: 'paco' }, 'name'));
