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

//JsUser.greeting = function(){   // adding a method to the object
//     console.log("Hello, JsUser!");
//}

//console.log(JsUser.greeting());   // calling the method of the object

//console.log(JsUser.greeting);   // it will print the function definition of the greeting method

//JsUser.greetingtwo = function(){
 //   console.log(`Hello, JsUser ${this.name}!`);   // this keyword refers to the current object, which is JsUser in this case
//}

//console.log(JsUser.greeting()); 

//console.log(JsUser.greetingtwo()); 

//const tinderUser = new Object();   // creating an object using the Object constructor

const tinderUser = {};   // creating an object using the object literal syntax  

tinderUser.id = "123abc";   // adding properties to the tinderUser object

tinderUser.name = "Sammy";  

tinderUser.isLoggedIn = true;

//console.log (tinderUser);   // it will print an empty object {}

const regularUser = {
    email : " abc@gmail.com",
    fullName :{
          userFullName : {
                 firstName : "Arohi",
                 lastName : "sharma"
          }
    }   
}

//console.log(regularUser.fullName);
//console.log(regularUser.fullName.userFullName);
//console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "one", 2: "two", 3: "three" };   // object with numeric keys
const obj2 = { 4: "four", 5: "five", 6: "six" };   // object with string keys

//const obj3 = { obj1, obj2 };   // merging obj1 and obj2 using spread operator
const obj3 = Object.assign({}, obj1, obj2); // {} is source and obj1 and obj2 are target objects, it will merge obj1 and obj2 into a new object and return it
console.log(obj3);   // it will print the merged object of obj1 and obj2

const users = [
     {
          id: 1,
          name: "Arohi",
          age: 25,
     },
     {
          id: 2,
          name: "sam",
          age: 25,
     },
     {
          id: 3,
          name: "ooggy",
          age: 25,
     },
     {
          id: 4,
          name: "soniya",
          age: 25,
     }
]


users[0].name = "Arohi Sharma";   // updating the name of the first user in the users array

console.log(users);   // it will print the updated users array with the new name of the first user  

console.log(tinderUser);   // it will print the tinderUser object
console.log(Object.keys(tinderUser));   // it will print the keys of the tinderUser object

console.log(Object.values(tinderUser));   // it will print the values of the tinderUser object

console.log(Object.entries(tinderUser));   // it will print the key-value pairs of the tinderUser object in an array format

console.log(tinderUser.hasOwnProperty("name"));   // it will return true if the tinderUser object has the name property, otherwise it will return false
