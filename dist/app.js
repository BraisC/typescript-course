// const names: Array<string> = []; // Same as string[]
// names[0].split(' ');
// const promise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// });
// promise.then((data) => data.split(' '));
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const mergedObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergedObj.age);
function countAndPrint(element) {
    let descriptionText = 'Got no value.';
    element.length > 0 && (descriptionText = `Got ${element.length} elements`);
    return [element, descriptionText];
}
console.log(countAndPrint('Hi there!'));
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ name: 'paco' }, 'name'));
//# sourceMappingURL=app.js.map