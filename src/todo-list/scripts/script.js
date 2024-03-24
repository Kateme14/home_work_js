'use strict'

const root = document.getElementById("root")

const container = document.createElement('div')
container.classList.add('container')
root.appendChild(container)


const buttonContainer = document.createElement('div')
buttonContainer.classList.add('container__buttons')
container.appendChild(buttonContainer)


const deleteButton = document.createElement('button')
deleteButton.classList.add('container__delete-btn')
buttonContainer.appendChild(deleteButton)
deleteButton.textContent = 'Delete All'


const inputField = document.createElement('input')
inputField.classList.add('container__input')
buttonContainer.appendChild(inputField)
inputField.placeholder = 'Enter todo...'


const addButton = document.createElement('button')
addButton.classList.add('container__add-btn')
buttonContainer.appendChild(addButton)
addButton.textContent = 'Add'

const textContainer = document.createElement('ul')
textContainer.classList.add('container__todo')
container.appendChild(textContainer)

const getDate =  () => {
    const currentDate = new Date()
    return currentDate.toLocaleString()
}

const setDate = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}

let todos = JSON.parse(localStorage.getItem('todos')) || []

addButton.addEventListener('click', function(){
    const tasksToDo = inputField.value.trim()
    if(tasksToDo !==''){
        const newDate = getDate()
        const id = todos.length + 1
        const todo = {
            id: id,
            date: newDate,
            text: tasksToDo,
            isChecked: false
        }
        todos.push(todo)
        setDate('todos', todos)
        // const dateField = newDate.toLocaleDateString()
        
        const todoList = document.createElement('li')
        todoList.dataset.id = id
        todoList.classList.add('container__todo-list')
        todoList.innerHTML = `
            <input class = 'container__checkbox' type = 'checkbox'>
            <p class = 'container__todo-text'>${tasksToDo}</p>
            <div class = 'container__close'><button class = 'container__close-btn'><svg class = 'close_svg' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#fff" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg></button><span class = 'container__date'>(${newDate})</span></div>`
        textContainer.appendChild(todoList)
        inputField.value = ''

        todoList.querySelector('.container__close-btn').addEventListener('click', function(event){
            const listItem = event.target.closest('.container__todo-list')
            if(listItem){
                const idToRemove = parseInt(listItem.dataset.id)
                todos = todos.filter(item => item.id !== idToRemove)
                setDate('todos', todos)
                listItem.remove()
            }
        })
    }
})

deleteButton.addEventListener('click', function(){
    textContainer.innerHTML = ''
    localStorage.removeItem('todos')
})

textContainer.addEventListener('click', function(event){
    const target = event.target
    if(target.tagName === 'INPUT' && target.type === 'checkbox'){
        const idToUpdate = parseInt(target.parentElement.dataset.id)
        const todoToUpdate = todos.find(item => item.id === idToUpdate)
        if(todoToUpdate){
            todoToUpdate.isChecked = target.checked
            setDate('todos', todos)
            const whatToDo = target.nextElementSibling
            if(target.checked){
                whatToDo.classList.add('completed')
            } else {
                whatToDo.classList.remove('completed')
            }
        }
    }
})

window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || []
    if(todos.length > 0) {
        todos.forEach(todo => {
            const todoList = document.createElement('li')
            todoList.dataset.id = todo.id
            todoList.classList.add('container__todo-list')
            todoList.innerHTML = `
                <input class = 'container__checkbox' type = 'checkbox' ${todo.isChecked ? 'checked' : ''}>
                <p class = "container__todo-text ${todo.isChecked ? 'completed' : ''}">${todo.text}</p>
                <div class = 'container__close'><button class = 'container__close-btn'><svg class = 'close_svg' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#fff" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg></button><span class = 'container__date'>(${todo.date})</span></div>`
            textContainer.appendChild(todoList)

            todoList.querySelector('.container__close-btn').addEventListener('click', function(event){
                const listItem = event.target.closest('.container__todo-list')
                if(listItem){
                    const idToRemove = parseInt(listItem.dataset.id)
                    todos = todos.filter(item => item.id !== idToRemove)
                    setDate('todos', todos)
                    listItem.remove()
                } 
            })
        });
    }
})


// const todoList = document.createElement('li')
// todoList.classList.add('container__todo-list')
// textContainer.appendChild(todoList)


// const checkboxToDo = document.createElement('input')
// checkboxToDo.type = 'checkbox'
// checkboxToDo.classList.add('container__checkbox')
// todoList.appendChild(checkboxToDo)


// const todoText = document.createElement('p')
// todoText.classList.add('container__todo-text')
// todoText.textContent = 'Todo text'
// todoList.appendChild(todoText)


// const closeAndDate = document.createElement('div')
// closeAndDate.classList.add('container__close')
// todoList.appendChild(closeAndDate)


// const closeButton = document.createElement('button')
// closeButton.classList.add('container__close-btn')
// closeButton.style.padding = '5px'
// closeAndDate.appendChild(closeButton)


// const svgClose = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
// svgClose.setAttribute("width", "1em")
// svgClose.setAttribute("height", "1em")
// svgClose.setAttribute("viewBox", "0 0 24 24")
// svgClose.style.width = '100%'
// svgClose.style.height = '100%'


// const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path')
// pathElement.setAttribute("d", "M24 2.4L21.6 0L12 9.6L2.4 0L0 2.4L9.6 12L0 21.6L2.4 24l9.6-9.6l9.6 9.6l2.4-2.4l-9.6-9.6z")
// pathElement.setAttribute("fill", "#fff")

// svgClose.appendChild(pathElement)
// closeButton.appendChild(svgClose)

// const dateField = document.createElement('p')
// dateField.classList.add('container__date')
// dateField.textContent = 'Date'
// closeAndDate.appendChild(dateField)


