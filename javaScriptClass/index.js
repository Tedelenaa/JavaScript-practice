// alert('hi bode')
// console.log('hi bode')


// strings
var Uname; //variable declaration
console.log(Uname);
var Bname = "Ada" //variable expression
var Cname = "Mike"
let Dname = "John Smilga"
// Bname = "Chika"
const username = "Mathew";
// username = "Jean"

// concatenation
// console.log("My name is " + Bname);
let sentence = "My name is " + Cname
console.log(sentence);

// template string: better alternative to conctenation
let story = "My name is" + " " + Bname + " and I am friends with " + Cname + " and " + Dname + "." + " We are welcoming " + username + " to the club"

let betterStory = `My name is ${Bname} and I am friends with ${Cname} and ${Dname}. We are welcoming ${username}`

console.log(story);
console.log(betterStory);

// let signedInUser = prompt("Please enter your name?")
// let welcomeMsg = `Welcome ${signedInUser}, thanks for signing up`

// string methods
// let welcomeMsg = `Welcome ${signedInUser.toLowerCase()}, thanks for signing up` 
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
console.log(part);

let newSentence = "Hi John, I will like to take your classes"
let slicedSentence = newSentence.slice(34, 41)
console.log(slicedSentence);
console.log(newSentence.length);


// alert(welcomeMsg)
// console.log(welcomeMsg)

// number and number methods
let age = "22";
const pi = 3.142;

//arithmetic operators: +(plus), -(subtraction), *(multiplication), /(division), %(remainder), **(raise to power)
let total = age + pi
console.log(total);

let subTotal = age - pi
console.log(subTotal);

console.log(age % 4);



//assignment operators: +=(plus), -=(subtraction), *=(multiplication), /=(division), %=(remainder), **=(try it out)

let score = 100;
// score = score + 10;
// or
// score += 10

// score = score % 10;
// or
score %= 10


// increment(++) and decrement(--)
score++
console.log(score);

console.log(typeof score);
console.log(typeof newSentence);
// let precise = pi.toPrecision()
// let precise = pi.toFixed()
let precise = parseInt(pi)
let precises = parseFloat(age)
console.log(precises);


let num = 20.50
// let convert = parseInt(num)
// let stChange = String(convert)
// console.log(stChange - 10);


let convert = num.toFixed()
console.log(convert);