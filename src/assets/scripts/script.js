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

//Задание 5

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    igor: 664,
    alexandra: 199
    }

let totalSalary = 0
for (let employee in salaries)
   totalSalary += salaries[employee]

console.log(totalSalary / Object.keys(salaries).length)

//Задание 6

let trueData = false
while(!trueData){
const login = prompt('Введите ваш логин')
const password = prompt('Введите ваш пароль')

if(!login || !password){
    alert("Поля не должны быть пустыми")
    continue
}

const customerData = {
    login,
    password 
}

const confirmLogin = prompt('Введите ваш логин для проверки')
const confirmPassword = prompt('Введите ваш пароль для проверки')

if(login === confirmLogin && password === confirmPassword){
    trueData = true
    alert("Welcome")
} else{
    alert("Данные введены не верно")
}
}

//Задание 1*

function footballScore(score){
    const numbersToWords = ["ноль", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"]
    const goals = score.split(':')
    const teamGoals1 = parseInt(goals[0])
    const teamGoals2 = parseInt(goals[1])

    if (teamGoals1 > 9 || teamGoals2 > 9)
        return "Вы слишком много забили голов"

    const words1 = numbersToWords[teamGoals1]
    const words2 = numbersToWords[teamGoals2]

    return `Результат: ${words1} : ${words2}`

}

console.log(footballScore("4:10"))