/*
Create a business name generator by combining list of adjectives and shop name and another word.

adjectives :
Crazy
Amazing
Fire

Shop Name :
Engine 
Foods 
Garments

Another Word :
Bros 
Limited
Hub


*/


let random = Math.random();

let first;
let second;
let third;

//divide the 0-1 in three equal parts 0-0.33-0.66-1 .
if(random > 0.66){
    first = "crazy";
}
else if(random < 0.66 && random >= 0.33 ){
    first = "Amazing";
}

else{
    first = "Fire";
}

//for Shop name //second
 random = Math.random();

if(random > 0.66){
   second = "Engine";
}
else if(random < 0.66 && random >= 0.33 ){
   second = "Foods";
}

else{
    second = "Garments";
}


//for Another name //third

 random = Math.random();

if(random > 0.66){
   third = "Bros";
}
else if(random < 0.66 && random >= 0.33 ){
    third = "Limited";
}

else{
    third = "Hub";
}

console.log(`The Business Name Is ${first} ${second} ${third}`);


// second way

// let obj1 = {0:"crazy " ,  1:"amazing " ,2:"fire "}
// let obj2 = {0:"engine " , 1:"food " ,2:"garments "}
// let obj3 ={0:"bros " , 1:"limited " ,2:"hub "}
// let c =Math.floor(Math.random()*3)
//  let d =Math.floor(Math.random()*3)
// let e =Math.floor(Math.random()*3)

// console.log(obj1[c]+obj2[d]+obj3[e])


// // 
// @amit_thixd
// 2 weeks ago
// //  Adjectives
// let Adjectives = {
//     1: "Crazy",
//     2: "Amazing",
//     3: "Fire"
// }

// // Shop Names
// let shopName = {
//     1: "Engine",
//     2: "Food",
//     3: "Garment"
// }

// // Another word

// let Word = {
//     1: "Bro",
//     2: "Limited",
//     3: "Hub"
// }

// // console.log(Word[2], shopName[1])

// let random = Math.random()
// console.log(random)


// if (random<0.33) {
//     console.log(Adjectives[1], shopName[2], Word[3] )
//     // Crzy food hub
// }

// else if (random>0.33 && random>=0.66){
//     console.log(Adjectives[2], shopName[3], Word[1] )
//     // amazing garment bro
// }

// else {
//     console.log(Adjectives[3], shopName[2], Word[1] )
//     // fire food bro
// }


