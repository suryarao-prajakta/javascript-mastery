//higher order function or methods
//forEach Loop in Arrays: 
// CallbackFunction: Here, it is a function to execute for each element in the array
//A callback is a function passed as an argument to another function.

let arr= ["pune", "mumbai", "thane"];

arr.forEach((val, idx, arr)=> {
    console.log(val.toUpperCase(), idx, arr);
});

//practice 
//Q1 for a given array of number,print the square of each value using the forEach loop.

let nums= [2, 3,4,5,6];

nums.forEach((num)=> {
    console.log(num*num);
})