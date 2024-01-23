// // CALCULATOR  
const prompt  = require('prompt-sync')()

const firstnum = parseFloat(prompt("enter first number: "))

const operator = prompt("Enter operator(+ ,- , %, * and /) ")

const secondnum =parseFloat(prompt("enter second number: "))

let result;

if (operator == '+') {
    result = firstnum + secondnum
    console.log("Addtion")
}
else if (operator == '-') {
    result = firstnum - secondnum
    console.log("Subtraction")
}
 else if (operator == '%') {
    result = firstnum % secondnum
    console.log("Modulus")
}
 else if (operator == '*') {
    result = firstnum * secondnum
    console.log("Multiplication")
}
else {
    result = firstnum / secondnum
    console.log("Division")
}
console.log(result)



