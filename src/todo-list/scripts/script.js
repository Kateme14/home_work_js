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

const todoList = document.createElement('li')
todoList.classList.add('container__todo-list')
textContainer.appendChild(todoList)


const checkboxToDo = document.createElement('input')
checkboxToDo.type = 'checkbox'
checkboxToDo.classList.add('container__checkbox')
todoList.appendChild(checkboxToDo)


const todoText = document.createElement('p')
todoText.classList.add('container__todo-text')
todoText.textContent = 'Todo text'
todoList.appendChild(todoText)


const closeAndDate = document.createElement('div')
closeAndDate.classList.add('container__close')
todoList.appendChild(closeAndDate)


const closeButton = document.createElement('button')
closeButton.classList.add('container__close-btn')
closeButton.style.padding = '5px'
closeAndDate.appendChild(closeButton)


const svgClose = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
svgClose.setAttribute("width", "1em")
svgClose.setAttribute("height", "1em")
svgClose.setAttribute("viewBox", "0 0 24 24")
svgClose.style.width = '100%'
svgClose.style.height = '100%'


const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path')
pathElement.setAttribute("d", "M24 2.4L21.6 0L12 9.6L2.4 0L0 2.4L9.6 12L0 21.6L2.4 24l9.6-9.6l9.6 9.6l2.4-2.4l-9.6-9.6z")
pathElement.setAttribute("fill", "#fff")

svgClose.appendChild(pathElement)
closeButton.appendChild(svgClose)

const dateField = document.createElement('p')
dateField.classList.add('container__date')
dateField.textContent = 'Date'
closeAndDate.appendChild(dateField)
