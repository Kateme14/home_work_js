'use strict'

// Задание 1
let string = 'true'
let boolean = false
let number = 17
let undefined = undefined
let myNull = null

console.log(typeof string)
console.log(typeof boolean)
console.log(typeof number)
console.log(typeof undefined)
console.log(typeof myNull)

// Задание 2
let height = 15
let width = 20

if (height > width){
    console.log(height)
}

else{
    console.log(width)
}

// Задание 3
// for(let i = 1; i<=20; i++){
//     if(i%3==0){
//         console.log(i)
//     }
// }

// Задание 4
let key = true
let documents = true
let pen = true
let apple = false
let orange = true

let shouldGoToWork = key && documents && pen && (apple || orange)

console.log("Can go to work:", shouldGoToWork)

// Задание 5
let salary = prompt('Salary')
if(salary%3==0 && salary%5==0){
    console.log('FizBuz')
}
else if (salary%5==0){
    console.log('Fiz')
}
else if(salary%3==0){
        console.log('Buz')
}

// Задание 6
let age = prompt('Your age')

if(age>18){
    console.log('Попей пивка')
}

else{
    console.log('Пей колу')
}

if(age>16 && age<18){
    console.log('Можешь выкурить сигаретку, только маме не говори')
}

// Задание 7

let world =prompt('Куда пойдешь')
switch (world){
    case 'юг':
        console.log('на юг пойдешь счастье найдешь')
        break
    case 'север':
        console.log('на север пойдешь много денег найдешь')
        break
    case 'запад':
        console.log('на запад пойдешь верного друга найдешь')
        break
    case 'восток':
        console.log('на восток пойдешь разработчиком станешь')
        break
    default:
        console.log('попробуйте еще раз')
}

// Задание 1*

let userName = 'пОлИнА нАбЕрЕжНаЯ'
let correctedName = ''

let capitalizeFlag = true

for(let i = 0; i<userName.length; i++){
    if(capitalizeFlag){
        correctedName += userName[i].toUpperCase()
        capitalizeFlag = false
    }
    else{
    correctedName += userName[i].toLowerCase()
}
if(userName[i] === ' '){
    capitalizeFlag = true
}
}

alert('Привет, ' + correctedName + '!')

// Задание 2*

let userNumber = parseFloat(prompt('Назовите число'))
let numberMinus = parseFloat(prompt('Сколько отнять'))
let numberPlus = parseFloat(prompt('Сколько прибавить'))
let numberMultiply = parseFloat(prompt('Сколько умножить'))
let numberDivide = parseFloat(prompt('Сколько разделить'))

let numberResult = ((((userNumber - numberMinus) + numberPlus) * numberMultiply) / numberDivide)

alert(`((((${userNumber} - ${numberMinus}) + ${numberPlus}) * ${numberMultiply}) / ${numberDivide}) = ${numberResult}`)


// Задание 3*

let ladder = 6

for(let k = 1; k <= ladder; k++){
    let stair = ''
    for(let j = 1; j <= k; j++){
        stair += '#'
    }
    console.log(stair)
}




