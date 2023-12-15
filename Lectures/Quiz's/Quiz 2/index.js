// write a sample program for demonstrating the for in loop.



const student = {
    "name":"sainath",
    "stream":"Computer",
    "Roll No":"TEB43"
}

console.log(student);

for (const key in student) {
    const element = student[key];
    console.log(key,element);
}