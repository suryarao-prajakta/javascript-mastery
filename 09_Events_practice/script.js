// Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again
let modeBtn= document.querySelector("#mode");
let body= document.querySelector("body");
let currMode= "light";

modeBtn.addEventListener("click", () => {
    if(currMode=== "light") {
        currMode="dark";
        body.style.background=("black");
    } else {
        currMode= "light";
        body.style.background=("white");
    }
    console.log(currMode);
});