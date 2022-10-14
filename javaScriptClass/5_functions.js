// functions
// traditional function
// function declaration
function sayHi() {
    console.log("good morning");
}

sayHi()

// function expression
const sayHello = function() {
    console.log("good night");
}

sayHello()

let num1 = 3;

function addTwoNums() {
    // var num4 = 10;
    let num2 = 6;
    let num3 = num1 + num2
    console.log(num3);
    // console.log(num3)
}

addTwoNums()
// console.log(num3);

// arguments and parameters
function simpleInterests(principal, rate, time){
    let prt = principal * rate * time
    console.log(prt); 
}

// simpleInterest()
simpleInterests(100, 300, 6)


// function return
function simpleInterest(principal, rate, time){
    let prt = principal * rate * time
    return prt
}

console.log(simpleInterest(200, 3000, 5)); 


// arrow function

// const sayGoodNight = () =>{
//     console.log("good night");
// }
// sayGoodNight();

// or

// const sayGoodNight = () =>{
//     return "good night";
// }

// console.log(sayGoodNight());

// or

const sayGoodNight = (username) => `good night ${username}`

console.log(sayGoodNight("Ada"));

// or 

const sayHiPerson = username => `good night ${username}`

console.log(sayGoodNight("Ada"));


const multiplyNum = (a, b) => a * b

console.log(multiplyNum(3, 5));


let simpleInterest = (principal, rate, time) => {
      let prt = principal * rate * time
    return prt
}

//or

// let simpleInterest = (principal, rate, time) => principal * rate * time
