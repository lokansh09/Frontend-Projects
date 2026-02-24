// ------------------ Task Class ------------------
class Task {
  constructor(id, title, completed = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}

// ------------------ TaskManager Class ------------------
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title) {
    const id = Date.now(); // unique id
    const task = new Task(id, title);
    this.tasks.push(task);
    return task;
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  toggleComplete(id) {
    const task = this.tasks.find(task => task.id === id);
    if (task) task.completed = !task.completed;
  }
}

// ------------------ UI Class ------------------
class UI {
  constructor(taskManager, taskListEl) {
    this.taskManager = taskManager;
    this.taskListEl = taskListEl;
  }

  render() {
  this.taskListEl.innerHTML = ''; // clear the list

  this.taskManager.tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';

    // Task text in a span
    const taskSpan = document.createElement('span');
    taskSpan.className = 'task-text';
    taskSpan.textContent = task.title;

    // Complete/Undo button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'complete-btn';
    toggleBtn.textContent = task.completed ? 'Undo' : 'Complete';
    toggleBtn.onclick = () => {
      this.taskManager.toggleComplete(task.id);
      this.render();
    };

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => {
      this.taskManager.deleteTask(task.id);
      this.render();
    };

    // Append text and buttons to li
    li.appendChild(taskSpan);
    li.appendChild(toggleBtn);
    li.appendChild(deleteBtn);

    // Append li to UL
    this.taskListEl.appendChild(li);
  });
}
}

// ------------------ Initialize ------------------
const taskManager = new TaskManager();
const ui = new UI(taskManager, document.getElementById('taskList'));

document.getElementById('addTaskBtn').addEventListener('click', () => {
  const input = document.getElementById('taskInput');
  const value = input.value.trim();
  if (value !== '') {
    taskManager.addTask(value);
    input.value = '';
    ui.render();
  }
});

// Optional: Press Enter to add task
document.getElementById('taskInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('addTaskBtn').click();
  }
});
