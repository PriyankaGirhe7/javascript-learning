//******Global and local scope********//

//var c = 300; // this is a global scope variable, which can be accessed from anywhere in the code

let a = 100; // this is a global scope variable, which can be accessed from anywhere in the code

if(true){
    let a = 100;
    const b = 200;
    var c = 30; // this is a local scope variable, which can only be accessed within this block of code
}

//console.log(c);  // it will print the value of c variable, which is 30 in the console

console.log(a);  // it will throw an error because a variable is not defined in the global scope
//console.log(b);  // it will throw an error because b variable is not defined in the global scope

if(true){                       //this is block scope
    let a = 100;
    const b = 200;
    var c = 30;
    console.log("Inner: " + a);  // it will print the value of a variable, which is 100 in the console
}


function one(){
    const username = "Arohi";  // this is a local scope variable, which can only be accessed within this function

    function two(){
        const website = "www.google.com";  // this is a local scope variable, which can only be accessed within this function
        console.log(username);
    }
    //console.log(website);  // it will throw an error because website variable is not defined in this scope
    two();
}
//one();

if(true){
    const username = "Arohi";  // this is a local scope variable, which can only be accessed within this block of code

    if(username === "Arohi"){
        const website = "www.google.com";
        console.log(username  + website);  // it will print the value of username variable, which is Arohi in the console
    }
    //console.log(website);  // it will throw an error because website variable is not defined in this scope
}
//console.log(username);  // it will throw an error because username variable is not defined in the global scope

//+++++++++++++++ intresting examples of functions +++++++++++++++++++//

console.log(addone(5)); // it will print the value of addone function, which is 6 in the console

function addone(num) {
    return num + 1;  // it will return the value of num variable plus 1 to the caller
}

addone(5);  // it will return the value of 5 plus 1, which is 6 to the caller

const addtwo = function(num){  // this is a function expression, which is stored in a variable called addtwo
    return num + 2;  // it will return the value of num variable plus 2 to the caller
}

addtwo(5);  // it will return the value of 5 plus 2, which is 7 to the caller


