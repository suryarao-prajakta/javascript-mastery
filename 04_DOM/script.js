//Access html code through jvascript using DOM
//DOM: When a web page is loaded, the browser creates a Document Object Model(DOM) of the page 
console.log(document.body.childNodes[2]);

alert ("Hello");
prompt("Enter Your Name:");

//Window object:
//The window object represents an open window in a browser. it is browser's object(not JavaScrip's) & is automatically crated by browser.
//it is a global object with lots of properties & methods.

console.log(window);

// What is DOM? Whena web page is loaded, the browser creates a Document Object Model(DOM) of the page

console.log(document);
console.log(document.body);
console.dir(document.body.childNodes[1]);

document.body.style.background="green"; //dynamicaly change in html page using DOM 
document.body.childNodes[3].innerText= "Click Here";

// DOM Manipulation
//1. Selecting with id : document.getElementById("myId");

let p= document.getElementById("Para");
console.dir(p);

let btn= document.getElementById("button");
console.dir(btn);

//2.selcecte with class: document.getElementByClass("heading");
let heading = document.getElementsByClassName("heading"); //returns HTML collection
console.dir(heading); 
console.log(heading);

//3.selecte with tag: document.getElementByTagName("p");
let para=document.getElementsByTagName("p");
console.dir(para);


//Query Selecotor
// let element = document.querySelector("p"); //returns 1st p element
// console.dir(element);

// let elements = document.querySelectorAll("p"); //returns all p elements //NodeList
// console.dir(elements);

let firstclass = document.querySelector(".Para"); //use . to access class 
console.dir(firstclass);

let firstbtn = document.querySelector("#btn"); //use # to access id 
console.dir(firstbtn);


// properties 
// 1. tagName : returns tag for element nodes
let name= document.querySelector("#btn");
console.dir(name.tagName); //output : BUTTON

// 2. innerText : returns the text content of the element and all its children
let div=document.querySelector("div");
console.dir(div.innerText); //div.innerText // only text

//3. innerHTML: returns the plain text or HTML content in the element
let div1= document.querySelector("div");
console.dir(div1.innerHTML); //div.innerHTML //text with tags

//4. textContent: returns textural content even for hidden elements
let heading1= document.querySelector("h1");
console.log(heading1);
console.dir(heading1.textContent); //textContent // returns hidden text also

//practice Q1. create a h2 heading element with text - "Hello". Append "i am learning JavaScript" to this text using JS
let h4= document.querySelector("h4");
console.log(h4.innerText);
console.log(h4.innerText=h4.innerText + " i am learning JavaScript"); //using + concatinate two strings

// Q2. create 3 div with common class name- "box" Acces then & add some unique text to each of them
let divs=document.querySelectorAll(".box");
console.log(divs);
console.log(divs[0].innerText="new uniqe value one");
console.log(divs[1].innerText="new uniqe value two");
console.log(divs[2].innerText="new uniqe value three");





// learn that things by yurself 
//firstChild lastchild childern
// textnode commentnode elementnode 
