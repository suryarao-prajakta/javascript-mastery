// //for-of-loop
// let str= "JavaScript";

// let size = 0;
// for (let val of str) {
//     console.log("val=",val);
//     size++;
// }

// console.log("string size=",size);

// //for in loop

// let student = {
//     name: "Prathamesh Suryarao",
//     age: 22,
//     cgpa: 7.5,
//     isPass: true
// };

// for(let key in student) {
//     console.log("key=",key, "value=", student[key]);
// }

//practice
//Qs1 print all even numbers from 0 to 100

// for (num=0; num<=100; num++) {
//     if(num%2=== 0){ //even num
//        console.log("num=", num);
//     }
// }

//Qs2 print all odd numbers from 0 to 100

for(num=0; num<=100; num++){
    if(num%2 !== 0) { //odd number
        console.log("num=",num);
    }
}