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

//Задание 5

const cats = ['Gachito', 'Tom', 'Batman']

for(let i = 0; i < cats.length; i++){
    console.log(cats[i])
}

for(let item of cats){
    console.log(item)
}

//Задание 6 

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

let unite = evenNumbers.concat(oddNumbers)
console.log(unite, unite.indexOf(8))

//Задание 7

const binary = [0, 0, 0, 0]
const binary1 = binary.join('1')
console.log(binary1)


//Задание 1*

function isPalindrome(word){
    word = word.toLowerCase()
    const wordReversed = word.split('').toReversed().join('')
    return word === wordReversed
}


console.log(isPalindrome('черепаха'))
console.log(isPalindrome('довод'))
console.log(isPalindrome('TeNet'))
console.log(isPalindrome('палиндром'))


//Задание 2*

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
    ]

function averageSum(matrix){
    let sum = 0
    let elementCount = 0

    for(let rows of matrix){
        for(let items in rows){
            sum += items
            elementCount++
        }
    }
    return sum / elementCount
}

const average = averageSum(matrix)
console.log(average)

//Задание 3*

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]

const arrPositive = []
const arrNegative = []

for (let number of mixedNumbers){
    if (number >= 0){
        arrPositive.push(number)
    } 
    else{
        arrNegative.push(number)
    }
}

console.log(arrPositive)
console.log(arrNegative)