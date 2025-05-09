let currentId = 0;

function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка при отриманні справ');
            }
            return response.json();
        })
        .then(data => {
            displayTodos(data);
            const ids = data.map(todo => todo.id);
            currentId = Math.max(...ids);
        })
        .catch(error => console.error('Помилка:', error));
}

function displayTodos(todos) {
    const table = document.getElementById('todosTable');
    table.innerHTML = '';

    todos.forEach(todo => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${todo.id}</td>
            <td>${todo.title}</td>
            <td>${todo.completed ? '✅' : '❌'}</td>
        `;
        table.appendChild(row);
    });
}

document.getElementById('todoForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const completed = document.getElementById('completed').checked;

    if (title) {
        currentId++;

        const table = document.getElementById('todosTable');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${currentId}</td>
            <td>${title}</td>
            <td>${completed ? '✅' : '❌'}</td>
        `;
        table.appendChild(row);

        document.getElementById('todoForm').reset();
    }
});

window.onload = loadTodos;
