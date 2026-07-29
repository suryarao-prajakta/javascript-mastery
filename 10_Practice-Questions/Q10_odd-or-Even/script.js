// odd or Even number

// Checking using if-else
// function check() {
//     let x = Number(document.getElementById("value").value);
//     if (x % 2 == 0) {
//         document.getElementById("result").innerText=`${x} is an Even number`;
//     }else{
//         document.getElementById("result").innerText=`${x} is an odd number`;
//     }

// }

// checking using ternery oprator
function check() {
    let x = Number(document.getElementById("value").value);
    const ans = (x % 2 == 0) ? "Even number" : "odd number";

    document.getElementById("result").innerText=`${x} is an ${ans}`;
}
