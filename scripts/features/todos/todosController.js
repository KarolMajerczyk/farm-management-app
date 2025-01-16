import { eventBus } from "../../shared/eventBus.js";
import { handleTodosSectionRender } from "./handlers/handleTodosSectionRender.js";
import { handleTodoItemAdd } from "./handlers/handleTodoItemAdd.js";
import { handleTodoItemDelete } from "./handlers/handleTodoItemDelete.js";
import { handleTodosDateChange } from "./handlers/handleTodosDateChange.js";
import { handleTodoItemCheckboxChange } from "./handlers/handleTodoItemCheckboxChange.js";

export function initTodosController() {
  eventBus.on("todosSectionSelected", handleTodosSectionRender);

  document
    .querySelector("#todos-form")
    .addEventListener("submit", handleTodoItemAdd);

  document.querySelector("#todos-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      handleTodoItemDelete(e);
    }
  });

  document.querySelector("#todos-list").addEventListener("change", (e) => {
    if (e.target.type === "checkbox") {
      handleTodoItemCheckboxChange(e);
    }
  });

  document
    .querySelector(".todos #date-picker")
    .addEventListener("change", (e) => handleTodosDateChange(e));
}

//
