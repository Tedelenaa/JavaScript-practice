// pi * r ** 2

// step 1: assign values to to variables
const pi = Math.PI

// step 2: receive input from the user
let user = prompt('please enter your name')
let radius = Number(prompt('please enter a number'))
console.log(typeof radius);

// step 3: perform arithmetic operations
let areaOfCircle = pi * radius ** 2
// or
// let areaOfCircle2 = pi * Math.pow(radius, 2)

// step 4: print the result
let output = `Hey ${user.toUpperCase()}, your final answer is ${areaOfCircle}`

alert(output)