// Attributes
//getAttribute(attr) // to get the attribute value
let div=document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name=div.getAttribute("name");
console.log(name);

let para=document.querySelector("p");
console.log(para);
console.log(para.getAttribute("class"));

//setAttribute(attr,value) // to set the attribute value

let text=document.querySelector("p");
console.log(text.setAttribute("class","paragraph")); //change u can see in elements


// style // node.style
console.dir(div.style);

div.style.backgroundColor="purple"
div.style.color="white";
div.style.fontsize="20px"
// div.style.visibility="hidden";

// div.innerText=("Hello World");

// insert Elements

let btn= document.createElement("button");
btn.innerText="Click Here";
console.log(btn);

// div.append(btn); //adds at the end of node(inside)

// div.prepend(btn); //adds at the start of node (inside)

// div.before(btn); // adds before the node (outside)

// div.after(btn); // adds after the node (outside)

let p = document.querySelector("p");
p.after(btn);

let newheading= document.createElement("h1");
newheading.innerHTML="<i>its New heading</i>";

document.querySelector("p").prepend(newheading);

// Delete Element
//node.remove() // remove the node

// btn.remove();
// let h= document.querySelector("h1"); //first access heading
// h.remove(); //then remove


// learn that things by yourself
// 1.appendChild(); 2.removeChild();