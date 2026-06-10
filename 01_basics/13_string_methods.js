//string Methods in js //strings are immutable
//these are built-in function to manipulate a string

//str.toUpperCase()

// let str = "hello world";
// str = str.toUpperCase(); 
// console.log(str);

//str.toLowerCase()

// let str = "Hello World";
// str = str.toLowerCase();
// console.log(str);

//str.trim() //removes whitespaces in starting and ending

// let str = "             Hello world        ";
// console.log(str);
// console.log(str.trim());

//str.slice(start, end?) // returns part of string
// let str = "ABCDEFGHIJ";
// console.log(str.slice(1,5));

// let str1 = "123456789";
// console.log(str1.slice(0,4));

//str1.concat(str2) //joins str2 with str1
// let str1 = "Hello";
// let str2 = "World";

// let result = str1.concat(str2);
// console.log(result);

// let str1= "Hello";
// let str2= "World";

// let result= str1+str2 ;
// console.log(result);

//str.replace(searchVal,newVal)
// let str= "Hello";

// console.log(str);
// console.log(str.replace("H","Y")); //Yello

// let str= "hellolololo";

// console.log(str.replaceAll("lo","p")); //helpppp


//str.charAt(ind)
// let str= "ILoveJS";

// console.log(str.charAt(0));

// practice
// Q1. prompt the user to enter their full name.Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.

let fullName= prompt("enter your fullname without spaces");

let username= "@" + fullName + fullName.length;
console.log(userName);