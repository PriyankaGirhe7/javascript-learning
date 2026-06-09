//************ARRAYS************//

const myArray = [1, 2, 3, 4, 5];

//console.log(myArray);
//console.log(myArray.length);
//console.log(myArray[0]);
//console.log(myArray[1]);
//console.log(myArray[2]);
//console.log(myArray[3]);
//console.log(myArray[4]);

const myHeros = ["Batman", "Superman", "Spiderman"];

const myArray2 = new Array(1, 2, 3, 4 );

//console.log(myHeros);
//console.log(myArray2);

//*****ARRAY METHODS***** //

//myArray.push(6);
//console.log(myArray);
//myArray.pop();

//myArray.unshift(0);
//myArray.shift();



//console.log(myArray.includes(6));
//console.log(myArray.indexOf(5));

//const newArray = myArray.join();

//console.log(myArray);
//console.log(newArray);

//** Slice and Splice **/

//console.log("A ",myArray);

//const mynew1 = myArray.slice(1, 3);
//console.log(mynew1);
//console.log("B ",myArray);

//const mynew2 = myArray.splice(1, 3);
//console.log("C ",myArray);
//console.log(mynew2);



const marvelHeros = ["Ironman", "Thor", "Spiderman"];
const dcHeros = ["Batman", "Superman", "Flash"];

//marvelHeros.push(dcHeros);
//console.log(marvelHeros);
//console.log(marvelHeros[3][1]);

const allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros);

const all_new_Heros = [...marvelHeros , ...dcHeros];
console.log(all_new_Heros);