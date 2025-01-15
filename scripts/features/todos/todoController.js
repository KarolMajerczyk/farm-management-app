import { handleTodosSectionRender } from "./handlers/handleTodosSectionRender.js";
import { handleTodoItemAdd } from "./handlers/handleTodoItemAdd.js";

export function initTodosController() {
  document.querySelector("#side-menu").addEventListener("click", (e) => {
    if (e.target.dataset.page === "todos") {
      handleTodosSectionRender();
    }
  });

  document
    .getElementById("add-todo-form")
    .addEventListener("submit", (e) => handleTodoItemAdd(e));
}
