// JavaScript код
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
let tasks = [];

// Завантаження завдань з LocalStorage при запуску
window.onload = function() {
  if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    renderTasks();
  }
}

// Додати нове завдання
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    tasks.push({text: taskText, completed: false});
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
    taskInput.value = '';
  }
}

// Видалити вибрані завдання
function deleteTasks() {
  tasks = tasks.filter(task => !task.completed);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

// Відобразити список завдань
function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', function() {
      tasks[index].completed = this.checked;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
    const text = document.createElement('span');
    text.textContent = task.text;
    listItem.appendChild(checkbox);
    listItem.appendChild(text);
    taskList.appendChild(listItem);
  });
}
// Випадаючий список
function getSelectedOption() {
    const selectList = document.getElementById('selectList');
    const selectedOption = selectList.options[selectList.selectedIndex].text;
    document.getElementById('selectedOption').textContent = `Вибраний елемент: ${selectedOption}`;
  }
// Оновити список завдань при завантаженні сторінки
window.onload = renderTasks;