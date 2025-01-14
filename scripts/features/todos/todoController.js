export function initTodosController() {
  document
    .querySelector("#side-menu")
    .addEventListener("click", (e) => handleTodosListLoad(e));

  document
    .getElementById("add-todo-form")
    .addEventListener("submit", (e) => handleAddTodoFormSubmit(e));
}
