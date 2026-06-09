//     Dates

let myDate = new Date();

//console.log(myDate);
//console.log(myDate.toString());

//console.log(myDate.toDateString());
//console.log(myDate.toLocaleDateString());

//console.log(typeof myDate);

//let myCreatedDate = new Date(2026 , 5 , 09);
//let myCreatedDate = new Date(2026 , 5 , 9 , 5 , 60 );

//console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("06-09-2026");

//console.log( myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

//console.log(myTimeStamp); 
//console.log(myCreatedDate.getTime());  
//console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());
