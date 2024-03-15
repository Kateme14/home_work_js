//Задание 1

//Способ 1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

function allNumbers(numbers){
    console.log(numbers)
}

fibonacci.forEach(allNumbers)

//Способ 2

const fibonacci2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

fibonacci2.forEach(numbers1=>console.log(numbers1))


//Задание 2
//Способ 1

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

function formatUsers(user, index) {
    return `member ${index + 1}: ${user}`;
}

const formattedUsers = users.map(formatUsers);

console.log(formattedUsers);



const users1 = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

const formattedUsers1 = users1.map((user, index) => `member ${index + 1}: ${user}`);

console.log(formattedUsers1);

//Задание 3
//Способ 1

const numbers = [7, -4, 32, -90, 54, 32, -21];

function filterPositive(number) {
    return number >= 0;
}

const positiveNumbers = numbers.filter(filterPositive);

console.log(positiveNumbers);

//Способ 2

const positiveNumbers1 = numbers.filter(number => number >= 0);

console.log(positiveNumbers1);

//Задание 4

const fibonacci3 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

function sumOfAllNumbers(accumulator, currentValue){
    return accumulator+currentValue
}
const sum = fibonacci3.reduce(sumOfAllNumbers, 0)
console.log(sum)

const sum1 = fibonacci3.reduce((accumulator, currentValue)=>accumulator+currentValue)
console.log(sum1)


//Задание 5

const numbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

function numbersEven(element){
    return element % 2 === 0
}

const allEven = numbers2.find(numbersEven)

console.log(allEven)

const allEven2 = numbers2.find(element => (element % 2 === 0))
console.log(allEven2)

//Задание 1*

function Student(name, rate, salary){
    this.name = name
    this.rate = rate
    this.salary = salary

    this.calculations = function(){
        switch (this.rate){
            case 'A':
                return this.salary*12
            case 'B':
                return this.salary*9
            case 'C':
                return this.salary*6
            default:
                return 0
        }
    }
}

const students = [
    new Student('Андрей', 'B', 15000),
    new Student('Максим', 'A', 50000),
    new Student('Паша', 'D', 1000),
    new Student('Аня', 'B', 12000),
    new Student('Катя', 'A', 70000),
]

function totalCalculation(students){
    let totalSum = 0
    students.forEach(student => {
        totalSum+=student.calculations()
    })
    return totalSum
}

console.log("Общая сумма кредита: " + totalCalculation(students))

//Задание 2*

function removeVowels(inputString) {
    const vowels = new Set(['a', 'e', 'u', 'o', 'i', 'A', 'E', 'U', 'O', 'I']) 
    let result = ''
    for (const char of inputString){
        if(!vowels.has(char)){
            result += char
        }
    }
    return result
}

const inputString = 'This information should be checked'
const outputString = removeVowels(inputString)
console.log(outputString)

//Задание 3*

function accum(inputString1){
    const letters = inputString1.split('')
    let result = ''

    for (let i = 0; i < letters.length; i++){
        result += letters[i].toUpperCase()

        for (let j = 0; j < i; j++){
            result += letters[i].toLowerCase()
        }

        if(i !== letters.length - 1){
            result += '-'
        }
    } 
    return result
}

console.log(accum('abcd'))
console.log(accum('RqaEzt'))
console.log(accum('cwAt'))
console.log(accum('hjrt'))

//Задание 4*

function highestAndLowest(inputString2){
    const numbers = inputString2.split(' ').map(Number)
    const highest = Math.max(...numbers)
    const lowest = Math.min(...numbers)
    return `${highest} ${lowest}`
}

console.log(highestAndLowest('4 7 8 2 9'))
console.log(highestAndLowest('1 2 -3 4 5'))
console.log(highestAndLowest('9 7 9 2 1'))
console.log(highestAndLowest('7 6 4 5 3'))
console.log(highestAndLowest('2 1 3 -4 6'))

//Задание 5*

function isogram(inputString3){
    const lowerCaseString = inputString3.toLowerCase()
    const letterCount = {}

    for(char of lowerCaseString){
        if (letterCount[char]){
            return false
        }

        letterCount[char] = true
    }
    return true
}

console.log(isogram('Tbilisi'))
console.log(isogram('Batumi'))
console.log(isogram('Poland'))
console.log(isogram('Terminator'))

//Задание 6* (пока что для меня это сложное задание, решить не получилось)

//Задание 7*

function toSymbol(word){
    const lowerCaseString3 = word.toLowerCase()
    const letterCount2 = {}
    let result = ''

    for(let char of lowerCaseString3){
        letterCount2[char] = (letterCount2[char] || 0) + 1
    }

    for(let char of lowerCaseString3){
        if(letterCount2[char] > 1){
            result += ')'
        } else {
            result += '('
        }
    }
    return result
}

console.log(toSymbol('din'))
console.log(toSymbol('recede'))
console.log(toSymbol('Success'))
console.log(toSymbol('(( @'))
