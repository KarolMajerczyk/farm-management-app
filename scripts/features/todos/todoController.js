import { addTodoItem, createTodoItem, getTodoItems } from "./todoModel.js";
import { renderTodoItems } from "./todoView.js";

// ---------------- //
// EVENTS
// ---------------- //

export function initTodos() {
  document
    .querySelector("#side-menu")
    .addEventListener("click", (e) => handleTodosListLoad(e));

  document
    .getElementById("add-todo-form")
    .addEventListener("submit", (e) => handleAddTodoFormSubmit(e));
}

function handleTodosListLoad(e) {
  const menuItemSection = e.target.dataset.page;

  if (menuItemSection === "todos") {
    const cardData = document.querySelector(".card-tile.active").dataset;
    const { type, id } = cardData;

    const todos = getTodoItems(type, id);
    renderTodoItems(todos);
  }
}

function handleAddTodoFormSubmit(e) {
  e.preventDefault();

  const cardData = document.querySelector(".card-tile.active").dataset;
  const { type, id } = cardData;

  const form = e.target;
  const data = new FormData(form);
  const description = data.get("description");

  const todo = createTodoItem(description);
  addTodoItem(type, id, todo);

  const todos = getTodoItems(type, id);
  renderTodoItems(todos);

  form.reset();
}

// document.getElementById("date-picker").addEventListener("change", () => {});

// document.getElementById("todos-list").addEventListener("click", () => {});
