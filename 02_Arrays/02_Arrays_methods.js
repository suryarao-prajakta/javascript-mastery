// //Array Methods 
// //push(): add to end
// let foodItems = ["potato","Apple", "Litchi", "Tomato"]
// foodItems.push("Chips", "burger", "paneer");

// console.log(foodItems);

// //pop(): delete from end & return
// let fruits = ["Apple", "Litchi", "Bannana", "Mango"]
// console.log(fruits);

// let deletedItem= fruits.pop();
// console.log(fruits);
// console.log("deleted", deletedItem);

// //toString(): converts array to string
// let num= [1,2,3,4,5,6,7,8,9];
// console.log(num); //Array 
// console.log(num.toString()); //String

// //concat(): joins multiple arrays & returns result
// let marvelheroes = ["thor", "spidermn", "itonman"];
// let dcheroes = ["superman", "batman"];

// heroes=marvelheroes.concat(dcheroes);
// console.log(heroes);

// //unshift(): add to start
// let marvelheroes = ["thor", "spidermn", "itonman"];

// marvelheroes= marvelheroes.unshift("antman");

//shift(): 
let marvelheroes = ["thor", "spidermn", "itonman"];
console.log(marvelheroes);

let val = marvelheroes.shift();
console.log(marvelheroes);
console.log("deleted", val);

//slice(): returns a piece of array
// let marvelheroes = ["thor", "spidermn", "ironman", "antman", "Dr.Strange"];
// console.log(marvelheroes);
// console.log(marvelheroes.slice(1,3));//output: spiderman,ironman //ending index is non enclusive

//splice(): change original array(add, remove, replace)
// let arr = [1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);
// console.log(arr);

// let arr = [1,2,3,4,5,6,7];
// arr.splice(2, 0, 101);
// console.log(arr);

//delete element
// let arr = [1,2,3,4,5,6,7];
// arr.splice(3,1);
// console.log(arr);

// //Replace element
// let arr = [1,2,3,4,5,6,7];
// arr.splice(3, 1,101);
// console.log(arr);


