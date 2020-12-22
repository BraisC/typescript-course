var userInput;
var userName;
userInput = 'Max';
userInput = 5;
console.log(userInput);
// userName = userInput; // Esto no daría error si userInput fuese de tipo any
console.log(userName);
if (typeof userInput === 'string') {
    userName = userInput;
}
console.log(userInput);
// never produces a value, not even undefined
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('Error', 500);
