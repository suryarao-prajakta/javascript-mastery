let someNumber = 55

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber); 

let fullName = "Prajakta";

let isFill = Boolean(fullName);
console.log(typeof isFill);

// *****Operators in js ******//
// used to perform some opperation on data

// Arithmetic Operators +,-,*,/

console.log(2+2); //Addition
console.log(2-2); //Substraction
console.log(2*2); //multiplication
console.log(2/2); //division
console.log(2%2); //modulus //remaindus
console.log(2**3); //Exponentiation //2^3

//Unary Operator
let a = 5;
let b = 2;

console.log("a=",a,"& b=",b);
a = a + 1; //a++ //a=5+1//6
console.log("a=",a); 

//Practice
let value = 3 
let negValue = -value;
console.log(negValue);
 
let str1 ="Prajakta";
let str2 =" Chandrakant";
let str3 =" Suryarao";
 
let str4 = str1 + str2 + str3;
// console.log(str1 + str2 + str3);
console.log(str4);
console.log("1" + 23); 