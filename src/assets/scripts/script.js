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
for(let i = 1; i<=20; i++){
    if(i%3==0){
        console.log(i)
    }
}

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





