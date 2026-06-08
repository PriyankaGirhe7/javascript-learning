let score = 33;

//console.log(typeof score);  // "number"
//console.log(typeof (score)); // "number"

let valueInNumber = Number(score);
//console.log(valueInNumber); // 33
//console.log(typeof valueInNumber); // "number"

//"33" = 33
//"33abc" = NaN
//true = 1, false = 0;

let valueInString = String(score);
//console.log(valueInString); // "33"
//console.log(typeof valueInString); // "string"

let isLoggedIn = "hello";

let BooleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(typeof isLoggedIn); // "boolean"

//" " = false;
//"hello" = true;


let someNumber = 33;

let stringNumber = String(someNumber);
//console.log(stringNumber); // "33"
//console.log(typeof stringNumber); // "string"

//*********************Operations******************************* */


let value = 3;

let negValue = -value;
//console.log(negValue); // -3

let str1 = "hello";
let str2 = "world";

let str3 = str1 + " " + str2;
//console.log(str3); // "hello world"

//console.log(3 + 4); // 7
//console.log("3" + "4"); // "34" 
//console.log("3" + 4); // "34"
//console.log(3 + 4 + "4");  // "74"


//console.log(+true);
//console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 25 + 10 + 5;
//console.log(num1, num2, num3); // 40 40 40

let gameCounter = 100;

gameCounter++;
console.log(gameCounter); // 101

++gameCounter;
console.log(gameCounter); // 100