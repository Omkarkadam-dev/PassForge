const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const symbolsEl = document.getElementById('symbol')
const numbersEl = document.getElementById('number')
const generateEl = document.getElementById('genrate')
const clipboardEl = document.getElementById('clipboard')

const randomFun = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbols: getRamdomSymbol
}


generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})


function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ``;

    let typeCount = lower + upper + number + symbol

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter((item) =>
        Object.values(item)[0]
    )

    if (typeCount === 0) {
        return ``;
    }

    for (let i = 0; i < length; i += typeCount) {
        typesArr.forEach((type) => {
            const keyFromRandomFun = Object.keys(type)[0]
            console.log(keyFromRandomFun)
            generatePassword += randomFun[keyFromRandomFun]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)
    console.log(finalPassword)
    return finalPassword
}


//to genrate lowercase letters, have to btw 97 to 122 charcode
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}


//to genrate uppercase letters, have to btw 65 to 90 charcode
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


//to genrate numbers, have to btw 48 to 57 charcode
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}


function getRamdomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}