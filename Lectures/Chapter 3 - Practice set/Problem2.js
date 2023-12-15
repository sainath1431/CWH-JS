// write a program using Q1 for-in loop.

const object ={
    "harry" : 98,
    "rohan" : 70,
    "akash" : 7
}

for (const key in object) {
    const marks = object[key];
   console.log(key,marks);
   
}
