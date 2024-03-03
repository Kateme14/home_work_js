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
//Задание 4, способ 1
        const colors = {
            'ru pum pu ru rum': {
            red: 'красный',
            green: 'зеленый',
            blue: 'синий'
            }
        }

        const values1 = Object.values(colors['ru pum pu ru rum'])
        console.log(values1[0])
        console.log(values1[2])

//Задание 4, способ 2

        const values2 = colors['ru pum pu ru rum']

        console.log(values2.red)
        console.log(values2.blue)
