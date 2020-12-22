function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    return result;
}
var number1 = 6;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'The result is: ';
add(number1, number2, printResult, resultPhrase);
