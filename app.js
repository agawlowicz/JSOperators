//Exercise 1
console.log("Exercise 1");
let a = 20;
let b = 4;

let add = a + b;
console.log(add);

let minus = a - b;
console.log(minus);

let multiply = a * b;
console.log(multiply);

let dividing = a / b;
console.log(dividing);

//Exercise 2
console.log("Exercise 2");
let c = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Jackie";
let lastName = "Chan";

console.log(c + str); //1111
console.log(c + str2); //11eleven
console.log(c + isPresent); //12 (isPresent evaluates to 1 for true)
console.log(c + firstName); //11Jackie
console.log(c + lastName); //11Chan

//Exercise 3
console.log("Exercise 3");
let d = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;
let firstName2 = "Robin";
let lastName2 = "Williams";

console.log(d == str3); //true
console.log(d === str3); //false
console.log(!isPresent2); //true
console.log("eleven" == str4 && d >= str3); //false
console.log(!isPresent2 || isPresent2); //true
console.log(0 == false); //true
console.log(0 === false); //false
console.log(0 != false); //false
console.log(0 !== false); //true