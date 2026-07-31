//Objects

const student = {
    fullName : "Prajakta Chandrakant Suryarao" ,
    marks : 80.81,
    printMarks : function() {
        console.log("marks =", this.marks);   //this means object student //student.marks
    },
};


// prototypes
let arr = ["apple", "mango", "banana"];
console.log(arr);
arr.push("litchi");
console.log(arr);
    



const employee = {
    calcTax () {
        console.log("tax rate is 10% "); 
    },
};

const employee1 = {
    salary : 50000,
    calcTax() {
        console.log("tax rate is 20%")
    },
};

employee1. __proto__ = employee;  //employee1.calcTax() -> tax rate is 20%

const employee2 = {
    salary : 25000,
};

employee2. __proto__ = employee;  //employee2.calcTax() -> tax rate is 10%



// Prototypes in js 
// A javaScript object is an entity having state and behavior (properties and method).
// js objects have a special property called prototype
// we can set prototype using __ proto __