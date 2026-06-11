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

//Q1 Create an array to store companies-> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

//a. Remove the first campany from the array // pop: delete end //shift:delete start
let companies= ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.shift();
// console.log(companies);

//b. Remove uber & Add Ola in its place //use splice(idx,remove1,add1)
// companies.splice(2,1,"ola");
// console.log(companies);

//c. Add Amazon at the end //push:end , unshift:start
companies.push("Amazon");
console.log(companies);