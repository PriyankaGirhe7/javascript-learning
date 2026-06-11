function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("D");
    console.log("H");
    console.log("A")
} //console.log(sayMyName);  // it will print the function definition of sayMyName in the console
//sayMyName();  // it will print the letters R, A, D, H, A in the console


//function addTwoNumbers(num1, num2){
  //  console.log(num1 + num2);
//}

//addTwoNumbers(num1, num2);  // it will print the sum of num1 and num2, which is NaN in the console

//addTwoNumbers(3, 5);  // it will print the sum of 3 and 5, which is 8 in the console


//function addTwoNumbers(num1, num2){
//   let result = num1 + num2;
//   return result;  // it will return the sum of num1 and num2 to the caller
//}
//const result = addTwoNumbers(3, 5);  // it will store the returned value of addTwoNumbers function in the result variable
//console.log("Result: " + result);  // it will print the value of result variable, which is 8 in the console

//function loginUserMessage(username){
  //  return `${username} just logged in`;
//}

//loginUserMessage("Arohi");  // it will return the string "Arohi just logged in" to the caller

//console.log(loginUserMessage("Arohi"));  // it will print the returned string "Arohi just logged in" in the console
//console.log(loginUserMessage(""));  // it will print the function definition of loginUserMessage in the console
//console.log(loginUserMessage());  // it will print the function definition of loginUserMessage in the console

function loginUserMessage(username){
    if (username === undefined){
       // console.log("Please enter a username");
        return;  // it will exit the function if username is undefined
    }
    return `${username} just logged in`;
}

//console.log(loginUserMessage());


function calculateCartPrice(...num1){     //this ...is rest operator // it will take any number of arguments and store them in an array called num1
    return num1;
}
//console.log(calculateCartPrice(100, 200, 300,2000));  // it will print the array [100, 200, 300] in the console


const user = {                  // this is an object literal
    username: "Radha",
    price: 100
}
function handleObject(anyobject){  // this function takes an object as an argument
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);  // it will print the value of username and price properties of the object in the console
    
}
handleObject(user);  // it will call the handleObject function and pass the user object as an argument, which will print "Username is Radha and price is 100" in the console

handleObject({
  username: "Arohi", 
  price: 200
});  // it will call the handleObject function and pass an object literal as an argument, which will print "Username is Arohi and price is 200" in the console

const mynewArray = [100, 200, 300, 400, 500];

function returnsecondValue(getArray){
    return getArray[1];  // it will return the second value of the array, which is 200
}

//console.log(returnsecondValue(mynewArray));  // it will print the returned value of returnsecondValue function, which is 200 in the console 

console.log(returnsecondValue([ 200, 300, 400, 500]));  // it will print the second value of the array, which is 200 in the console


