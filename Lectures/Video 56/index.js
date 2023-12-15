console.log("Hello I am Conditional Tutorial")

// If-else statement 

let age = 1;
// let grace = 2;

//Assignment operators
// age = age + grace;
// age += grace;
// age -= grace;
// age *= grace;
// age /= grace;
// age %= grace;
// age **= grace;

// Arithmetic operators
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

if(age==18){
    console.log("You can drive.");
}
else if(age==0){
    console.log("Are You Kidding?");
}
else if(age==1){
    console.log("Are You   Again Kidding?");
}

else{
    console.log("You cannot drive.");
}

// nodejs repl(read evaluate print loop)

//  "3" == 3 (true)
// (== this operator shows only equality in the values rather than type of values)

// "3" === 3 (false)
// (=== this operator check the both values are equal with same type of values. then return ture otherwise false.)

// "3" !== 3(true)
//(!== this operator check value and its type of the operands. if not equal values or not equal type then return true otherwise return false.)

// > "3" == 3
// true
// > "3" === 3
// false
// > "3" !== 3
// true
// > "3" === "3"
// true
// > a=6
// 6
// > b=7
// 7
// > a!=b
// true
// > a!=b && b!=a
// true
// > a!=b || b!=a
// true
// >  a!=b || b==a
// true
// > a!=b && b==a
// false

//Singl line comment In JS

/*
I am a 
Multiline
Comment In JS
*/

// example of turnary operator

// a = 6
// 6
// > b = 8
// 8


// > c = (a>b) ? (a-b) : (b-a)
// 2

/*
translates to :
if(a>b) {
    let c = a-b;
}

esle{
    let c = b-a;
}
*/
 