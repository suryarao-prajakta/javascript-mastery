// To find the area of a right-angled triangle, we can use the formula: Area = (base * height) / 2;

// let base = prompt("Enter the base of the triangle:");
// let height = prompt("Enter the height of the triangle:");
// let area = (base * height) / 2;

// document.write(`The area of the right-angled triangle is:  ${area}`);


// To find the area of a triangle using Heron's formula, we can use the formula: Area = √(s * (s - a) * (s - b) * (s - c)), where s is the semi-perimeter of the triangle and a, b, and c are the lengths of the sides of the triangle.

let a = prompt("Enter the length of side a:");
let b = prompt("Enter the length of side b:");
let c = prompt("Enter the length of side c:");
let s = (a + b + c) / 2;
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

document.write(`The area of the triangle using Heron's formula is: ${area}`);
