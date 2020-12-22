// Infers number as return type
function sum(n1: number, n2: number) {
  return n1 + n2;
}

// infers void as return type
function printResults(num: number) {
  console.log(`Result: ${num}`);
}

// Has a function as parameter
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResults(sum(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = sum;

console.log(combineValues(18, 18));

addAndHandle(2, 3, (res) => console.log(res));
