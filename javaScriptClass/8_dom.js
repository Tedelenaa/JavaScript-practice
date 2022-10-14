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
