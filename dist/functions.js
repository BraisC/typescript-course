// Infers number as return type
function sum(n1, n2) {
    return n1 + n2;
}
// infers void as return type
function printResults(num) {
    console.log("Result: " + num);
}
// Has a function as parameter
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResults(sum(5, 12));
var combineValues;
combineValues = sum;
console.log(combineValues(18, 18));
addAndHandle(2, 3, function (res) { return console.log(res); });
