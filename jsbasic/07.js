//*******Object**********//    {} is an object 

//object literals

const mySymbol = Symbol("key1");// symbol is a unique and immutable data type that can be used as a key for object properties. It is often used to create private properties or to avoid naming conflicts in objects.


const JsUser = {
     name: "Radha",
     "full name": "Radha Sharma",
     [mySymbol]: "key1",    //  mySymbol: "key1",   // this will not work because it will consider mySymbol as a string key
     age: 20,
     location: "Mumbai",
     email: "radha@gmail.com",
     isLoggedIn: false,
     lastLogInDays: ["Monday","Saturday"]
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(JsUser[mySymbol]);

//JsUser.email = "radha.updated@gmail.com";   // updating the value of email key using (=)

//Object.freeze(JsUser);   // it will not allow to update the value of email key

//JsUser.email = "radha@google.com";   // this will not update the value of email key

//console.log(JsUser);   // it will print the old value of email key 

JsUser.greeting = function(){   // adding a method to the object
     console.log("Hello, JsUser!");
}

console.log(JsUser.greeting());   // calling the method of the object

//console.log(JsUser.greeting);   // it will print the function definition of the greeting method

JsUser.greetingtwo = function(){
    console.log(`Hello, JsUser ${this.name}!`);   // this keyword refers to the current object, which is JsUser in this case
}

console.log(JsUser.greeting()); 

console.log(JsUser.greetingtwo()); 