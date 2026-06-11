//Array Methods
//map method: Creates a new array with the results of some operation. the value its callback returns are used to form new array


// //print all the values using map
// let nums = [56, 67,54]; 

// nums.map((val)=>{
//     console.log(val);
// })


//
let nums = [56, 67,54]; 

let newArr = nums.map((val)=> {
    return val * 2 ;
})
console.log(newArr);
console.log(nums);


//filter method: Creates a new array of elements that give true for a condition/filter

let arr = [1, 2, 3, 4, 5, 6, 7];

let evenArr= arr.filter((val)=>{
    return val % 2===0;
});
console.log(evenArr);

//reduce: Performs some operations & reduces the array to a single value. it returns that single value.

arr =[1,2,3,4];

const output= arr.reduce((res,curr)=>{
    return res + curr;
});

console.log(output);