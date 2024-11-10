const form = document.getElementById('form')
const input = document.getElementById('input')
const addBtn = document.getElementById('add-btn')
const todosUL = document.getElementById('todos')
const searchInput = document.getElementById('search')

let todos = JSON.parse(localStorage.getItem('todos')) || []

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos))
}

function renderTodos(todosToRender) {
    todosUL.innerHTML = ''
    todosToRender.forEach((todo, index) => {
        const todoEl = document.createElement('li')
        todoEl.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''}>
            <span>${todo.text}</span>
        `
        if (todo.completed) {
            todoEl.classList.add('completed')
        }

        const checkbox = todoEl.querySelector('input[type="checkbox"]')
        checkbox.addEventListener('change', () => {
            todo.completed = checkbox.checked
            if (todo.completed) {
                todoEl.classList.add('completed')
            } else {
                todoEl.classList.remove('completed')
            }
            saveTodos()
        })

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todos.splice(index, 1)
            saveTodos()
            renderTodos(todos)
        })

        todosUL.appendChild(todoEl)
    })
}

function addTodo(todoText) {
    if (todoText) {
        todos.push({ text: todoText, completed: false })
        saveTodos()
        renderTodos(todos)
        input.value = ''
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo(input.value)
})

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase()
    const filteredTodos = todos.filter(todo => 
        todo.text.toLowerCase().includes(searchTerm)
    )
    renderTodos(filteredTodos)
})

renderTodos(todos)