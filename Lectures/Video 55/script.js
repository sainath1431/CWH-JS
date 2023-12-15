console.log("Hey this is tutorial 55")

// var a = 5;
// var b = 6;
// var c = "Harry";
// var _a = "shubham";

// Here by using let make variable scope is global.
let a = 5;
// a = a + 1
let b = 6;
let c = "Harry";
let _a = "shubham";
// var 55a = "rohan" Not alllowed 
console.log(a+b)
console.log(c)
console.log(typeof a,typeof b, typeof c)
{
    let a=66;
    console.log(a)

    // let key word ka scope uskao jis block main declare kiya hai  waha tak hi raheta hai.

}

var d = 5;
d = d+1;

console.log(d)

{
    var d = 66;
    console.log(d)

    // Var is global variable through the code.


}

// const a1 = 6;
// console.log(a1)
// a1=a1+1; Not A

let x = "Sainath Wankhede";
let y = 22;
let z = 3.44;
const p = true;
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)

// IMP
// data type of null is object and object is an non-primitive data type 


/*
object
combination of key-value pair.

If key have sapce then it write inside double quote. if not present space we can write it as any way.
for ex
job role (wrong space is present )
"job role"(right space is present )
salary(right space is not present)
"salary"(right space is not present)


*/
// creating an object 
let o = {
    "name":"Sainath",
    "job code":5600,
}

// display an object
console.log(o);

// add key in an object
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);

o.is_handsome= true;
console.log(o);