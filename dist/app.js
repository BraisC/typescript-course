let userInput;
let userName;
const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('clicked');
});
userInput = 'Max';
userInput = 6;
console.log(userInput);
// userName = userInput; // Esto no daría error si userInput fuese de tipo any
console.log(userName);
if (typeof userInput === 'string') {
    userName = userInput;
}
console.log(userInput);
// never produces a value, not even undefined
function generateError(message, code) {
    throw { message, errorCode: code };
}
generateError('Error', 500);
//# sourceMappingURL=app.js.map