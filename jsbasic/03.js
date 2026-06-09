const name = "Radha";
const repoCount = 50;

//console.log( name +  repoCount +"Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//string interpolation

const gameName = new String('priyanshi');

console.log(gameName[0]);
console.log(gameName._proto_);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,3);
console.log(anotherString);

const newStringOne = "    Radha    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://radha.com/radha20%sharma";
console.log(url.replace('20%','-'));
console.log(url.includes('sundar'));
console.log(url.includes('radha'));

