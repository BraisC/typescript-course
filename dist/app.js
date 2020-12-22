// Infers number as return type
function sum(n1, n2) {
    return n1 + n2;
}
// infers void as return type
function printResults(num) {
    console.log("Result: " + num);
}
printResults(sum(5, 12));
