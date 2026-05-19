// Non-Primitive data types : objects(Arrays, Functions)

// Objects: it is a collection of kay values pair

const student = {
    fullName : "Sakshi Rao",
    age: 20,
    cgpa: 8.2,
    isPass: true,
};

console.log(student);
console.log(typeof student); //object
console.log(student["fullName"]); // Sakshi Rao
console.log(student.age); //20

student["fullName"] = "Rahul kumar";
console.log(student["fullName"]);

student["age"] = student["age"] + 1;
console.log(student["age"]);

// let //updatable
// const //not updatable
// const obj key //updatable 

// practice quetions
//Q1 create a const object called "profile" to store profile information 

const profile= {
    userName: "@prajs__07",
    isFollow: true,
    followers: 886,
    following: 262,
};

console.log(profile);
console.log(typeof profile["isFollow"]); //boolean

// Q2 create a const object called "product" to store information aboute product

const product = {
    productName: "Ball Pen",
    rating: 4,
    price: 270,
    offer: 5,
};

console.log(product);