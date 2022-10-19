let ageDisplay = document.querySelector(".ageDisplay");
let ageCalc = document.querySelector(".ageCalc");
let ageReset = document.querySelector(".ageReset");

// prompt version of the challenge

// ageCalc.addEventListener('click', () => {
//     let D = new Date();
//     // console.log(D);
//     let currentYear = D.getFullYear()
//     let BirthYear = Number(prompt('please enter your age'))
//     let ageInDays = currentYear - BirthYear
//     // ageDisplay.style.border = '2px solid black'
//     // ageDisplay.style.textAlign = 'center'
//     // ageDisplay.style.width = '75%'
//     // ageDisplay.textContent = `${ageInDays}`

//     ageDisplay.textContent = ageInDays
// })

// ageReset.addEventListener('click', () => {
//     ageDisplay.reset()

// })

// form version of the challenge
let ageForm = document.querySelector(".form");
 
ageCalc.addEventListener("click", (e) => {
  e.preventDefault();

  let ageFeild = document.forms["ageForm"]["age"].value.trim();
  let error_name = document.getElementById("error_age");

  if (ageFeild === "") {
      error_name.textContent = `please enter your age`;
     
  } else {
      error_name.textContent = ``;
      
    let D = new Date();

    let currentYear = D.getFullYear();
    // let BirthYear = Number(prompt('please enter your age'))
    // let ageInDays = currentYear - BirthYear
    let ageInDays = currentYear - ageFeild;
    console.log(ageInDays);
    ageDisplay.textContent = ageInDays;
    }
    
//   if (ageFeild) {
//       ageForm.reset()
//     }
    
});

ageReset.addEventListener('click', (e) => {
    e.preventDefault()
    ageDisplay.textContent = 0
})
