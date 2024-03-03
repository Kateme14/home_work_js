//Задание 1

let myObject = {
    name: 'Katya',
    city: 'Poznan',
}

console.log("То, что нужно удалить:", myObject)

delete myObject.name
delete myObject.city

console.log("После того как удалили:", myObject)