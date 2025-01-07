import { renderFieldOverview } from "./renderFieldOverview.js";
import { renderBudget } from "./renderBudget.js";
import { renderTodos } from "./renderTodos.js";
import { toggleMenuItemActive } from "./toggleMenuItemActive.js";

let currentObj;

export function changeSidePanelSection(page, obj, menuItem) {
  if (obj) {
    currentObj = obj;
  } else {
    obj = currentObj;
  }

  const currentSection = document.querySelector(".side-panel .visible");
  currentSection.classList.remove("visible");

  const nextSection = document.querySelector(`.side-panel .${page}`);
  nextSection.classList.add("visible");

  toggleMenuItemActive(menuItem);

  switch (page) {
    case "overview":
      renderFieldOverview(obj);
      break;
    case "budget":
      renderBudget(obj.budget);
      break;
    case "todos":
      renderTodos(obj.todos);
      break;
  }
}
