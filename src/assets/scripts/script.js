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