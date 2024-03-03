'use strict'

//Задание 1

let myObject = {
    name: 'Katya',
    city: 'Poznan',
}

console.log("То, что нужно удалить:", myObject)

delete myObject.name
delete myObject.city

console.log("После того как удалили:", myObject)

//Задание 2

let shopList = {
    orange: 'yes',
    cake: 'no'
}

if('cake' in shopList){
    console.log('true')
} else{
    console.log('false')
}

//Задание 3

const student = {
    name: 'John',
    age: 19,
    isHappy: true
    }

    console.log("Выводим ключи объекта:")
        for(let key in student){
            console.log(key)
        }
       
    console.log("Выводим значения ключей объекта:")
        for(let key in student){
            console.log(student[key])
        }
