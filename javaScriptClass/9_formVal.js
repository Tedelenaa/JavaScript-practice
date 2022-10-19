// target the form 
let formVal = document.querySelector('.form');

// target the button
let submitBtn = document.querySelector('.btn')

// add an eventlistener to the form
formVal.addEventListener('click', (e) => {
    e.preventDefault()
    // the code above prevents the page from reloading when the submit button is clicked


    // get the values entered into the form
    let username = document.forms['newform']['name'].value.toUpperCase().trim()
    // let username = newform.name.value.trim()

    let useremail = document.forms['newform']['email'].value.trim()

    let initPass = document.forms['newform']['initpass'].value.trim()

    let finalPass = document.forms['newform']['pass'].value.trim()

    // let testPattern = /^[a-zA-Z]{6, 1}$/;


    // get the error message blocks
    let errorName = document.querySelector('#error_name')
    let errorMail = document.getElementById('error_email')
    let initPassError = document.getElementById('error_initpass')
    let finalPassError = document.getElementById('error_pass')


    // if (username === '') {
    //     errorName.textContent = 'please enter your name'
    // } else if (testPattern.test(username) === false) {
    //     errorName.textContent = 'please enter a valid name'
    // } else {
    //     errorName.textContent = ''
    // }
    if (username === '') {
        errorName.textContent = 'please enter your name'
    } else {
        errorName.textContent = ''
    }

    if (useremail === '') {
        errorMail.textContent = 'please enter your email'
    } else {
        errorMail.textContent = ''
    }

    if (initPass === '') {
        initPassError.textContent = 'please enter your password'
    } else if (finalPass === '') {
        finalPassError.textContent = 'please confirm your password'
    } else if (initPass !== finalPass) {
        finalPassError.textContent = 'your password does not match'
    } else {
        initPassError.textContent = ''
        finalPassError.textContent = ''
    }


    if (username && useremail && initPass && finalPass) {
        formVal.reset()
    }

})
