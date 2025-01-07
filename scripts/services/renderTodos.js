import { DOM } from "../dom/domElements.js";

export function renderTodos(todos) {
  let html = "";

  DOM.sidePanelHeading.innerText = "Lista zadań";

  todos.forEach((entry) => {
    html += `
        <li class="list-item" data-id="${entry.id}">
            <input type="checkbox" />
            <p>${entry.description}</p>
        </li>
      `;
  });

  DOM.todos.innerHTML = html;
}
