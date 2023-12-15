// // write a javascript program to find whether a number is divisible by either 2 or 3.

let num = 17;

if(num%2===0 && num%3===0)
{
    console.log("The number is divisible by both 2 and 3.");
}

else if(num%2===0){
    console.log("The number is divisible by 2");
}
else if(num%3===0){
    console.log("The number is divisible by 3");
}
else{
    console.log("The number is neither divisible by 2 nor divisible by 3.");
}
