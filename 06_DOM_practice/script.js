// Q1. create a new button element. Give it a text "click me" background color of red & tex color of white 
// inser the button as the first element iside the body rag

let btn = document.createElement("button");
btn.innerText="click me";

document.querySelector("body").prepend(btn); //we want button first element so use prepend
btn.style.backgroundColor="red";
btn.style.color="white";


// Q2. create a <p> tag in html,give it a class & some styling.
// now create a new class in CSS and try to append this class to the <p> element.
// Did you notice, how you overwrite the class name when you add a new one?
// Solve this problem using classList

let para = document.querySelector("p");
// para.setAttribute("class", "newClass"); //apply new class
para.classList.add("newClass"); //apply both classes
para.classList.remove("content");
console.log(para);
