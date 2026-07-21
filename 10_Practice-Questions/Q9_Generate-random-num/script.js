// generate random number using Math.random() methond.
 
let a = Math.random();

console.log(` Random number = ${a}`);
 
// get random numbers between a range using Math.random() * (highestNumber - LowestNumber) + LwestNumber

let b = Math.random() * (100 - 1) + 1 ;
console.log(`Random number between 1 to 100 is : ${b}`);  // these numbers are between 1 to 10 


// get a random integer number between a range using Math.floor(Math.random() * (highestNumber -lowesNumber)) + lowestNumber

let x = Math.random() * (11 - 1 ) + 1 ;
document.write("Integer number = " + Math.floor(x));

// get 4 digit otp 

let otp = Math.floor(1000 + Math.random() * 9000);
console.log("your one time otp is " + otp);