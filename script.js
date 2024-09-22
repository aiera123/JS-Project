const button = document.getElementById('generateBtn');
const todolist = document.getElementById('todoList');
function fetchTodo(){
    fetch('https://jsonplaceholder.typicode.com/todos/8')
    .then((response) => response.json())
    .then(data=>{
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.textContent=`Todo: ${data.title}`;
        todolist.appendChild(todoItem);
    })
    .catch(error => {
        console.error('Error fetching the todo:',error);

    })
}
button.addEventListener('click',fetchTodo);