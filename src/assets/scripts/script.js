'use strict'

//Задание 1

const colors = ['red', 'green', 'blue']
console.log(colors.length)


//Задание 2

const animals = ['monkey', 'dog', 'cat']
console.log(animals[animals.length-1])

//Задание 3

//Способ 1

const numbers = [5, 43, 63, 23, 90]

while(numbers.length > 0){
    numbers.pop()
}

console.log(numbers)

//Способ 2

const numbers1 = [5, 43, 63, 23, 90]

while(numbers1.length > 0){
    numbers1.shift()
}

console.log(numbers1)

//Способ 3

const numbers2 = [5, 43, 63, 23, 90]
numbers2.length = 0

console.log(numbers2)

//Способ 4

const numbers3 = [5, 43, 63, 23, 90]
numbers3.splice(0, numbers3.length)

console.log(numbers3)


//Задание 4

const students = ['Polina', 'Dasha', 'Masha']

students.pop()
students.push('Borya')
students.shift()
students.unshift('Andrey')

console.log(students)