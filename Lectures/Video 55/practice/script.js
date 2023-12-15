console.log("Hey This is 55 Video of Sigma Web dev.")

var a = 10;
var b = 20;
var n = "Sainath";
var  _c = "sam";
// var 22c = "same"; this invaild because the variable name can't start with the digit.

console.log(a + b + 30)
console.log(n)

console.log(typeof a,typeof b,typeof n)

// const a1 = 6
// a1 = a1 + 1 constant variable cannot be change.(Not Allowed)

// let is Block Scoped.
let d = 6;
console.log(d)

{
    let d = 66;
    console.log(d)
}

d = d + 1
console.log(d)

// Var is Globally Scoped.

var e = 100;

{
    var e = 50;
    console.log(e)
}

console.log(e)