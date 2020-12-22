// Infers number as return type
function sum(n1: number, n2: number) {
  return n1 + n2;
}

// infers void as return type
function printResults(num: number) {
  console.log(`Result: ${num}`);
}

printResults(sum(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = sum;

console.log(combineValues(18, 18));
