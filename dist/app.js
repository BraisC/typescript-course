var userInput;
var userName;
userInput = 'Max';
userInput = 5;
console.log(userInput);
userName = userInput; // Esto no daría error si userInput fuese de tipo any
console.log(userName);
if (typeof userInput === 'string') {
    userName = userInput;
}
console.log(userInput);
