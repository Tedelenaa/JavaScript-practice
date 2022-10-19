// // let first = document.getElementById('first')
// // console.log(first);

// // let second = document.getElementsByClassName('second')
// // console.log(second);


// let second = document.getElementsByClassName('second')
// // converting an HTML collection to an array
// let arrItems = Array.from(second);
// console.log(arrItems);

// // let pTags = document.getElementsByTagName('p')
// // console.log(pTags);

// let first = document.querySelector('#first')
// console.log(first);

// // let third = document.querySelector('.third')
// // console.log(third);

// let allPTags = document.querySelectorAll('p')
// console.log(allPTags);


let peopleArr = ["Mason", "Tunde", "Joy", "Mercy"];

let ulList = document.querySelector('.list')

peopleArr.forEach((person)=>{
    ulList.innerHTML += `<li>${person}</li>`
})


let h1 = document.querySelector('h1')

// h1.textContent = ` hey JS`
h1.textContent += ` hey JS`

// 1.
let anchor = document.querySelector('.add__link');

// 2. set the href attribute   
anchor.setAttribute('href', 'www.google.com');
anchor.textContent = 'Google';

// lets add the color class coming from the css file --- METHOD 1 (adding class)
anchor.setAttribute('class', 'color');

// we can add style attribute
anchor.setAttribute('style', 'font-weight: 900')

// or
anchor.style.padding = '10px';
anchor.style.marginTop = '50px' // when it is a compound style, we use camel case

// classList
let anotherPTag = document.querySelector('.letters')
console.log(anotherPTag.classList);

// --- METHOD 2 (adding class)
anotherPTag.classList.add('center')
// anotherPTag.classList.remove('center')  // we can also remove the class that we applied



let div = document.querySelector('.div')
let divChildren = div.children // this is more efficient in fetching all the children of a parent tag
// this method returns an html collection in which you cannot perform an array methods on. to solve that, you convert it to an array
let divArr = Array.from(divChildren)
divArr.forEach((arrItem) => {
    arrItem.classList.add('color')
})

// let's get the first child
console.log(div.firstChild)
console.log(div.lastChild)
console.log(divChildren.length)

// or

let newDivChildren = document.querySelectorAll('.child') // if there were 20 children, this method will not be efficient
// this method returns a nodelist on which you can perform a foreach array method on.
// console.log(newDivChildren);


//DOM CHALLENGE 1
//1. target the parent
// let challenge = document.querySelectorAll('div.challenge > p')
// or

let challenge = document.querySelectorAll('.challenge > p')
// console.log(challenge);
// convert it to an array
let challengeArr = Array.from(challenge)
challengeArr.map((challItem)=> {
    if(challItem.textContent.includes('error')) {
        challItem.classList.add('error')
    } else if(challItem.textContent.includes('success')){
        challItem.classList.add('success')
    } else{
        challItem.style.backgroundColor = '#d2abf7'
        challItem.style.fontWeight = '700'
        challItem.style.padding = '20px'
    }
})

// or
// let challenge = document.querySelector('.challenge')
// // console.log(challenge);
// let challengeChildren = challenge.children
// // console.log(challengeChildren);
// let challengeArr = Array.from(challengeChildren)
// console.log(challengeArr);


// DOM CHALLENGE 2: setting an array of objects into a table
let peopleData = [
    {
        id: 1,
        firstName: 'Ada',
        lastName: 'Gbenga',
        age: 10
    },

    {
        id: 2,
        firstName: 'Uche',
        lastName: 'Smith',
        age: 20,
        // hobbies: ['reading', 'swimming']
    },

    {
        id: 3,
        firstName: 'Bisi',
        lastName: 'Lucy',
        age: 30
    },

    {
        id: 4,
        firstName: 'Ade',
        lastName: 'Maxwell',
        age: 40
    }
]


let personData = document.querySelector('.personData');
let theading = document.querySelector('.personHeading')

peopleData.map((person)=>{

// theading.innerHTML += `
//         <tr>
//         <th>${Object.keys(person)}</th>
       
//         </tr>
//     `

    personData.innerHTML += `
    <tr>
    <td>${person.id}</td>
    <td>${person.firstName}</td>
    <td>${person.lastName}</td>
    <td>${person.age}</td>
    </tr>
    `
})


{/* <td>${keys}</td> */}



// EVENTS
let ulBlock = document.querySelector('.ulList')
let addBtn = document.querySelector('.addItem')
// console.log(addBtn);

// 1. handling inline events
// const addItem = () => {
//     let liElement = document.createElement('li')
//     liElement.textContent = 'new item'
//     ulBlock.append(liElement)
// }

// 2. handling events externally
addBtn.addEventListener('click', ()=>{
    let liElement = document.createElement('li')
    liElement.textContent = 'new item'
    ulBlock.append(liElement)
})



// console.log(addItem())
