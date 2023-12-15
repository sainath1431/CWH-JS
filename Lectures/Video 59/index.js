/* Create a faulty calculator using JavaScript.

This faulty calculator does following:

1. It takes two numbers as input from the user.

2.It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times.
*/

let random = Math.random()
let a = prompt("Enter First Number : ")
let b = prompt("Enter Second Number : ")
let c = prompt("Enter Operation : ")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if(random>0.1){
    // peform Correct  calculation
 console.log('The result is ${eval(',$,{a}, $,{c} ,$,{b},') }')
 
}

else{
    // perform wrong calculation.
    c = obj[c]
    // console.log('The result is ${eval(',$,{a} ,$,{c}, $,{b},') }')

    // alert('The result is ,
    // ,$,{,eval('${a} ${c} ${b}')}')
}