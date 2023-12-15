// write a program to print the marks of a student  in an object using for loop.

/*
obj = {
    harry : 98,
    rohan : 70,
    akash : 7
}
*/

const object ={
    "harry" : 98,
    "rohan" : 70,
    "akash" : 7
}

for (const key in object) {
    const marks = object[key];
   console.log(marks);
   
}

