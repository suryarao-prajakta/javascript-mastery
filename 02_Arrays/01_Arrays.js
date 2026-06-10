//Arrays in js: Collections of items

// let marks = [97, 82, 78, 69,79];
// console.log(marks);
// console.log(marks.length);

// let heroes = ["ironman", "Thor", "Hulk", "Shaktiman", "Spiderman", "Antman"];
// console.log(heroes);

//Array indices
// const StudentsNames = ["Prajakta", "Prathamesh", "Swara", "Nidhi"];

// console.log(StudentsNames[3]);

//looping over on array: Print all elements of an array
//for loop
// let heroes= ["ironman", "Thor", "Hulk", "Shaktiman", "Spiderman", "Antman"];

// for (let idx = 0; idx <= heroes.length; idx++) {
//     console.log(heroes[idx]);
// }

//for of
// let heroes= ["ironman", "Thor", "Hulk", "Shaktiman", "Spiderman", "Antman"];

// for(let hero of heroes) {
//     console.log(hero);
// }

//Practice
//Q1 for a given aray with marks of students-> [85,97,54,75,78,65] find the average marks of the entire class.

// let marks= [85,97,54,75,78,65];

// let sum= 0;

// for(let val of marks) {
//     sum += val;
// }

// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);

//Q2 For a given arrays with price of 5 items->[250,645,300,900,50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let items= [250,645,300,900,50];

let idx = 0;
for(let val of items) {
    console.log(`value at index ${idx} = ${val}`);
    let offer = val/10;
    items[idx]= items[idx] -offer;
    console.log(`value after offer = ${items[idx]}`);
    idx++;
}