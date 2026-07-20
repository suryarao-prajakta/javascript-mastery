// Swapping of two numbers using a temporary variable

// let a = prompt("Enter the first number :");
// let b = prompt("Enter the second number :");

// document.write("Before swapping the first number is:" + a + "<br>");
// document.write("Before swapping the second number is:" + b + "<br>");

// var temp;

// temp = a;
// a = b;
// b = temp;

// document.write("After swapping, the first number is: " + a + "<br>");
// document.write("After swapping, the second number is: " + b);


// Swapping of two numbers without using a temporary variable

let x = parseInt(prompt("Enter the first number is: "));
let y = parseInt(prompt("Enter the second number is: "));
document.write("Before swapping the first number is: " + x + "<br>");
document.write("Before swapping the second number is:" + y + "<br>");

//  x = 6; y = 9;
x = x + y; // 6 + 9 = 15
y = x - y; // 15 - 9= 6
x = x - y; // 15 - 6 =9

document.write("After swapping, the first number is: " + x + "<br>");
document.write("After swapping, the second number is: "+ y + "<br>");