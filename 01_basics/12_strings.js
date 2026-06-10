//Strings in js
//string is a sequence of characters used to represent text

// let str = "Prajakta";
// console.log(str[5]); //k

//Template Literals: A way to have embedded expression in strings
//string interpolation: To create string by doing substitution of placeholders  `string text ${expression} string text`   

let obj = {
    item: "Pen",
    price: 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// escape characters
console.log("hello \nworld"); //  \n
console.log("hello\tworld"); //   \t: one tab space

let str= "hello\tworld"; 
console.log(str.length); //11


