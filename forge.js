const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const symbolsEl = document.getElementById('symbol')
const numbersEl = document.getElementById('number')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')
const copyPasswordButton = document.querySelector('.copy-button')


// array of for each case
const upperValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerValues = "abcdefghijklmnopqrstuvwxyz"
const numbers = "1234567890"
const symbols = "!@#$%^&*()"


// event on generate password button
generateEl.addEventListener('click', generatePassword)

// event on copying the password to the clipboard
copyPasswordButton.onclick = function () {
    navigator.clipboard.writeText(resultEl.textContent)
}


function generatePassword() {

    // fetching the information related to check box whether it is checked or not
    const isUpperCase = uppercaseEl.checked
    const isLowerCase = lowercaseEl.checked
    const isNumber = numbersEl.checked
    const isSymbol = symbolsEl.checked

    // debuggin console 
    // console.log(isUpperCase, isLowerCase, isNumber, isSymbol)

    // password string
    let mainString = ""


    // assigning the string base of the case checked 

    if (isUpperCase) {
        mainString += upperValues
        console.log(mainString)
    }

    if (isLowerCase) {
        mainString += lowerValues
        console.log(mainString)
    }

    if (isNumber) {
        mainString += numbers
        console.log(mainString)
    }

    if (isSymbol) {
        mainString += symbols
        console.log(mainString)
    }

    // converint string into array 

    const arrayOfPasswordString = mainString.split('')

    // debuggin console 
    // console.log(arrayOfPasswordString)


    // converting into random password
    let result = randomStringGenerate(arrayOfPasswordString, lengthEl.value)

    // assigning the result to the p tag

    resultEl.textContent = result
}


// function to generate the element randomly 
function randomStringGenerate(array, length) {

    let password = ""

    for (let i = 0; i < length; i++) {
        password = password + (array[(Math.floor(Math.random() * array.length))])
    }

    return password
}