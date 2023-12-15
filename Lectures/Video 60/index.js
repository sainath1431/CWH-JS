console.log("This is strings tutorial")

let a = "sainath";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
// console.log(a[7]); it is undefined because string have 0-6 characters only so it will return undefined.

// length property is used to find the length of string.
console.log(a.length);

let real_name = "sainath";
let friend = "shrinivas";

console.log("His name is "+real_name+" and his friends name is "+friend);
// Template literals(backtic)
console.log(`His name is ${real_name} and his friends name is ${friend}`);

let c = "harry";
let d = "rohan";

// 
console.log("roh'an");
// by using template literals
console.log(`roh"an`);
// by using escape sequence
console.log('roh\"an');

// add new line by escape sequence.
console.log('roh\nan');
// add tab space by escape sequence
console.log('roh\tan');

// properties and methods of string

let b = "ShivamSh";

// To convert in upercase to all string.
console.log(b.toUpperCase());

// To convert in lowercase to all string.
console.log(b.toLowerCase());

console.log(b.length);

// slicing the string.

console.log(b.slice(1,5));
// hiva

console.log(a.slice(1));
// hivam

console.log(b.replace("sh","77"));
// 77viamSh
// If there have more occurence then first occurence will replace only.

let name1 = "sainath";
let name2 = "wankhede";
console.log(name1.concat(name2,"Dasa"));
console.log("sainath"+"wankhede"+"Dasa");
// sainath wankhede Dasa.

// trim() This method is used to remove the white spaces.
let name3 = "  sainath  ";
console.log(name3.trim());
// sainath

// Strings are immutable that means the original string remains as it is only the new string will be created evey time.

//charAt() -> it gives index and return the character at this index.

// indexOf() -> it gives string and check itis sub string of original string and if is then return the starting index of the given index.other wise it returns index is "-1"

//startswith() -> it gives string and check original string is start with given string or not.

// endswith() -> it gives a string and check original string is ends with given stirng or not.

