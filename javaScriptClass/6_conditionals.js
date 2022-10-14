// if

let age = 18;
let num = "12";

// if..else
if(age == 17) {
    console.log(`since you are above ${age}, you can vote`);
} else {
    console.log(`since you are not above ${age}, you can't vote`);

}

if(age != 40) {
    console.log(`since you are above ${age}, you can vote`);
} else {
    console.log(`since you are not above ${age}, you can't vote`);

}

// if..else/else..if
if(num === 12) {
    console.log(`${num} is a string`);
} else if(num == 12) {
    console.log(`${num} is not a string`);
} else {
    console.log('never mind');
}


// if..else/else..if
if(num != 12) {
    console.log(`${num} is a string`);
} else if(num !== 12) {
    console.log(`${num} is not a string`);
} else {
    console.log('never mind');
}


// logical operators
// grade where 0-39: F, 40-49: D, 50-59: C, 60-69: B, 70-100: A.

let score = 12;

if (score <=39 ){
    console.log('F');
} else if(score >= 40 && score <=49 ) {
    console.log('D');
} else if(score >= 50 && score <=59) {
    console.log('C');
} else if(score >= 60 && score <= 69) {
    console.log('B');
} else if(score > 69) {
    console.log('A');
} else{
    console.log(`try again next semester`);
}


// let score = prompt('please input your score');

// if(score <=39 ){
//     alert('that was an F');
// } else if(score >= 40 && score <=49 ) {
//     alert('that was an D');
// } else if(score >= 50 && score <=59) {
//     alert('that was an C');
// } else if(score >= 60 && score <= 69) {
//     alert('that was an B');
// } else if(score > 69) {
//     alert('Great, that was an A');
// } else{
//     alert(`try again next semester`);
// }


// logical not
let hi = 'hi'

if(hi != 'hi' || !(hi == 3)){
    console.log('hey');
}


// let userScore = 70

// switch(userScore) {
//     case userScore <=39:
//         alert('F')
//         break;
//     case score >= 40 && score <=49:
//         alert('D')
//         break;
//     case score >= 50 && score <=59:
//         alert('C')
//         break;
//     case score >= 60 && score <= 69:
//         alert('B')
//         break;
//     default:
//         alert('A')
//         break;
// }

let userScore = 30;

switch(userScore){
    case userScore <=39:
        console.log('F');
        break;
    case userScore >= 40 && userScore <= 49:
        console.log('D');
        break;
    case userScore >= 50 && userScore <=59:
        console.log('C');
        break;
    case userScore >= 60 && userScore <= 69:
        console.log('B');
        break;
    default:
        console.log('A');
        break;
}
