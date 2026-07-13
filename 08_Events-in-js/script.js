// // Events in js 
// //1. onclick
// let btn1= document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("button was clicked");
//     let a=25;
//     a++; //a+1
//     console.log(a); //25+1=26
    
// };

// //2. ondblclick
// let btn2 = document.querySelector("btn2");
// btn2.ondblclick=() => {
//     console.log("button was clicked 2X");
// };

// //3. onmouseover
// let div = document.querySelector("div");
// div.onmouseover= () => {
//     console.log("you are inside div");
// };

// // Event Object: it is a special object that has details about the event
// // All event handlers have acces to the Event Object's properties and methods.
// let bt1 = document.querySelector("#btn1");

// btn1.onclick= (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(EvalError.clientX, evt.clientY);
// };

// Event Listerners
// 1. node.addEventListener(event,callback)
btn1.addEventListener("click", (evt) =>{
    console.log("button1 was clicked");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
});

btn1,addEventListener("click",() =>{
    console.log("button was clicked -handler2");
});

// 2.node.removeEventListener(event,callback)
// *Note: the callback refrence should be same to remove
 
