// Demonstrate to the use of switch case statements in Javascript.

let a = 10;
let b = 20;

console.log("Operation Menu");
console.log("1.Addition(+)");
console.log("2.Substraction(-)");
console.log("3.Multiplication(*)");
console.log("4.Division(/)");

let op = "+";

switch(op){
    case '+':
        console.log("Addition : "+ (a+b));
        break;
    case '-':
        console.log("Substraction : "+ (a-b));
        break;
    case '*':
        console.log("Multiplication : "+ (a*b));
        break;
    case '/':
        console.log("Division : "+ (a/b));
        break;
    default:
        console.log("Please choose valid operation.");
    
}