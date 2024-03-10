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

//Способ 2

const users1 = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

const formattedUsers1 = users1.map((user, index) => `member ${index + 1}: ${user}`);

console.log(formattedUsers1);


