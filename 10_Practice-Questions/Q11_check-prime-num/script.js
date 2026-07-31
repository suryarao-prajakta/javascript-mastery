// check Prime number 
// A prime number is a positive interger that is only divisible by 1 and itself. for Example, 2,3,5,7,11 are the first few prime numbers

let num = prompt("Enter a number to check number is prime or not");
if (num == 1) {
    console.log(`${num} is neither prime or composite`);
}else if(num < 1) {
    console.log(`${num} is not an a Prime number`);
}else{
    for(let i =2; i < num; i++ ) {
        if(num % i == 0){
            var res = `${num} is not a Prime number`;
            break;
        }else{
            var res = `${num} is an a Prime number`;
        }
    }
    console.log(res);
}