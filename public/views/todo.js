export default function todo() {
  return `
    <div class="container fade-in">
      <h1>Study Tasks</h1>
      <div class="todo-input-group">
        <input type="text" id="todoInput" placeholder="What do you need to study?" />
        <button id="addTodoBtn">Add Task</button>
      </div>
      <ul id="todoList" class="todo-list">
        </ul>
    </div>
  `;
}

export const todoInit = async () => {
  const token = localStorage.getItem("token");
  const todoList = document.getElementById("todoList");
  const addBtn = document.getElementById("addTodoBtn");
  const input = document.getElementById("todoInput");

  if (!token) {
    todoList.innerHTML = `<p class="error">Please <a href="/login" data-link>login</a> to manage your tasks.</p>`;
    return;
  }

  const fetchTodos = async () => {
    const res = await fetch("/api/todos", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const tasks = await res.json();
      todoList.innerHTML = tasks
        .map(
          (task) => `
        <li class="todo-item ${task.is_completed ? "completed" : ""}" data-id="${task.id}">
          <span>${task.task}</span>
          <div class="todo-actions">
            <button class="toggle-btn">${task.is_completed ? "Undo" : "Done"}</button>
            <button class="delete-btn">Delete</button>
          </div>
        </li>
      `,
        )
        .join("");
    }
  };

  addBtn.onclick = async () => {
    const task = input.value.trim();
    if (!task) return;

    const res = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ task }),
    });

    if (res.ok) {
      input.value = "";
      fetchTodos();
    }
  };

  todoList.onclick = async (e) => {
    const id = e.target.closest("li").dataset.id;
    if (e.target.classList.contains("delete-btn")) {
      await fetch(`/api/todos/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTodos();
    } else if (e.target.classList.contains("toggle-btn")) {
      const isCompleted = !e.target
        .closest("li")
        .classList.contains("completed");
      await fetch(`/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ is_completed: isCompleted }),
      });
      fetchTodos();
    }
  };

  fetchTodos();
};
