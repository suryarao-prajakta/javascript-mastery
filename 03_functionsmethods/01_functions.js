// functions: Blocks of code that performs a specific task, can be invoked needed


//Define function
// function myFunction() {
//     console.log("hie i am a Prajakta");
//     console.log("I am learning js");
// }

// //call(invoke) function
// myFunction();
// myFunction();


// function newFunction(msg) {
//     //Parameter-> input
//     console.log(msg);
// }

// newFunction("I am learning JavaScript"); //argumet
// newFunction(); //output: undefined


// //function-> sum of 2 numbers

// function sum(x, y) {
//     console.log(x + y);
// }

// sum(3,3);

// function sum(x, y ){
//     //function parameters:are like local variables -> block scope of function
//     s= x + y;
//     return s;
// }

// let val = sum(4,5);
// console.log(val);

//1. sum function
function sum(a, b) {
    console.log(a+ b);
    return;
}
sum(3 , 9);

//2. multiplication
function multiply(x, y) {
    console.log(x * y);
    return;
}

multiply(2,9);

//practice 
//Q1 Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.
function countVowels(str) {
    let count = 0;
    for(const char of str){
        if (char=="a" ||
            char=="e" ||
            char=="i" ||
            char=="o" ||
            char=="u" 
        ) { 
           count++;
        }
    }
    console.log(count);
}
countVowels("abcdefghij");
