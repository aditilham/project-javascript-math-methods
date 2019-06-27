"use strict"

alert(`Unique code of the Give Away Winner Today is = ${Math.round(Math.random() * 8999 +1000)}`)

let firstNumber = parseInt(prompt(`Input number you want to give the power`))
let powerNumber = parseInt(prompt(`Input the power number`))

alert(`${firstNumber} in power ${powerNumber} = ${Math.pow(firstNumber, powerNumber)}`)