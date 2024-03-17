const root = document.getElementById("root")

const container = document.createElement('div')
container.classList.add('container')
root.appendChild(container)
container.style.margin = '200px auto'
container.style.padding = '15px'
container.style.maxWidth = '500px'
container.style.background = '#ccc'
container.style.border = '1px solid #000'
container.style.borderRadius = '16px'



const buttonContainer = document.createElement('div')
buttonContainer.classList.add('container__buttons')
container.appendChild(buttonContainer)
buttonContainer.style.margin = '0 auto 30px'
buttonContainer.style.display = 'flex'
buttonContainer.style.justifyContent = 'space-between'

const deleteButton = document.createElement('button')
deleteButton.classList.add('container__delete-btn')
buttonContainer.appendChild(deleteButton)
deleteButton.textContent = 'Delete All'
deleteButton.style.maxWidth = '120px'
deleteButton.style.width = '100%'
deleteButton.style.backgroundColor = 'aqua'
deleteButton.style.padding = '15px'
deleteButton.style.border = '1px solid #000'
deleteButton.style.borderRadius = '8px'
deleteButton.style.cursor = 'pointer'
deleteButton.style.transition = 'all .2s linear'
deleteButton.addEventListener("mouseover", () => {
    deleteButton.style.transform = "scale(1.2)"
})
deleteButton.addEventListener("mouseout", () => {
    deleteButton.style.transform = "scale(1)"
})


const inputField = document.createElement('input')
inputField.classList.add('container__input')
buttonContainer.appendChild(inputField)
inputField.placeholder = 'Enter todo...'
inputField.style.border = '1px solid #000'
inputField.style.borderRadius = '8px'
inputField.style.outline = 'none'
inputField.style.padding = '15px'
inputField.style.textAlign = 'center'

const addButton = document.createElement('button')
addButton.classList.add('container__add-btn')
buttonContainer.appendChild(addButton)
addButton.textContent = 'Add'
addButton.style.maxWidth = '120px'
addButton.style.width = '100%'
addButton.style.backgroundColor = 'aqua'
addButton.style.padding = '15px'
addButton.style.border = '1px solid #000'
addButton.style.borderRadius = '8px'
addButton.style.cursor = 'pointer'
addButton.style.transition = 'all .2s linear'
addButton.addEventListener("mouseover", () => {
    addButton.style.transform = "scale(1.2)"
})
addButton.addEventListener("mouseout", () => {
    addButton.style.transform = "scale(1)"
})

const textContainer = document.createElement('ul')
textContainer.classList.add('container__todo')
container.appendChild(textContainer)

const todoList = document.createElement('li')
todoList.classList.add('container__todo-list')
textContainer.appendChild(todoList)
todoList.style.listStyle = 'none'
todoList.style.display = 'flex'
todoList.style.justifyContent = 'space-between'
todoList.style.alignItems = 'center'
todoList.style.border = '1px solid #000'
todoList.style.borderRadius = '8px'
todoList.style.padding = '10px'


const checkboxToDo = document.createElement('input')
checkboxToDo.type = 'checkbox'
checkboxToDo.classList.add('container__checkbox')
todoList.appendChild(checkboxToDo)

const todoText = document.createElement('p')
todoText.classList.add('container__todo-text')
todoText.textContent = 'Todo text'
todoList.appendChild(todoText)
todoText.style.maxWidth = '330px'
todoText.style.width = '100%'
todoText.style.background = '#fff'
todoText.style.textAlign = 'center'
todoText.style.padding = '10px'
todoText.style.borderRadius = '8px'

const closeAndDate = document.createElement('div')
closeAndDate.classList.add('container__close')
todoList.appendChild(closeAndDate)
closeAndDate.style.display = 'flex'
closeAndDate.style.flexDirection = 'column'
closeAndDate.style.justifyContent = 'space-between'
closeAndDate.style.alignItems = 'flex-end'

const closeButton = document.createElement('button')
closeButton.classList.add('container__close-btn')
closeButton.style.padding = '5px'
closeAndDate.appendChild(closeButton)
closeButton.style.marginBottom = '20px'
closeButton.style.background = 'aqua'
closeButton.style.border = '1px solid #000'
closeButton.style.borderRadius = '4px'
closeButton.style.display = 'flex'
closeButton.style.width = '24px'
closeButton.style.height = '24px'
closeButton.style.cursor = 'pointer'

const svgClose = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
svgClose.setAttribute("width", "1em")
svgClose.setAttribute("height", "1em")
svgClose.setAttribute("viewBox", "0 0 24 24")
svgClose.style.width = '100%'
svgClose.style.height = '100%'


const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path')
pathElement.setAttribute("d", "M24 2.4L21.6 0L12 9.6L2.4 0L0 2.4L9.6 12L0 21.6L2.4 24l9.6-9.6l9.6 9.6l2.4-2.4l-9.6-9.6z")
pathElement.setAttribute("fill", "#000")

svgClose.appendChild(pathElement)
closeButton.appendChild(svgClose)

const dateField = document.createElement('p')
dateField.classList.add('container__date')
dateField.textContent = 'Date'
closeAndDate.appendChild(dateField)
dateField.style.background = '#fff'
dateField.style.textAlign = 'center'
dateField.style.padding = '1px 10px'
dateField.style.borderRadius = '4px'