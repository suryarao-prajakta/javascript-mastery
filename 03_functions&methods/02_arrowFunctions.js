// Arrow Functions: compact way of writing a function

//sum function
function sum(x, y) {
    return x + y;
}

const arrowSum = (x, y) => {
    console.log(x + y);
};
arrowSum(2,5);

//multiplication function 
function mul (a, b) {
    return a * b;
}

const arrowMul = (a, b)=> {
    console.log(a *b);
};
arrowMul(9, 3);



//Q1 Create a arrow function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.

const countVow = (str) => {
    let count = 0;
    for(const char of str){
        if (char=="a" ||
            char=="e" ||
            char=="i" ||
            char=="o" ||
            char=="u" 
        ) { 
           count++;
        }
    }
    console.log(count);
    return count;
}

countVow("abcdefghijkou");