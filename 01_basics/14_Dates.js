// Dates

// let myDate = new Date()
// console.log(myDate.toDateString()); // Tue Aug 04 2026
// console.log(myDate.getDate()); // 4
// console.log(myDate.toISOString()); // 2026-08-04T06:40:27.748Z
// console.log(myDate.getFullYear()); // 2026
// console.log(myDate.getMonth()); // 7 (August, zero-based index)
// console.log(myDate.getDay()); // 2 (Tuesday)
// console.log(myDate.toLocaleString()); // 8/4/2026, 12:14:24 PM
// console.log(typeof myDate); //object



// Date is a object in javascript. It is used to work with dates and times. The Date object provides various methods to get and set the date and time, as well as to format the date in different ways.

// let myCreatedDate = new Date(2004 , 7 , 29) //29 july 2004
// console.log(myCreatedDate.toDateString()); // web jul 29 2005

// let myCreatedDate = new Date(2005 , 7 , 29 ,2 , 30 ,0) 
// console.log(myCreatedDate.toLocaleString()); //8/29/2005, 2:30:00 AM

let myCreatedDate = new Date("2026-01-14")
console.log(myCreatedDate.toLocaleString()); //1/14/2026, 5:30:00 AM


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));