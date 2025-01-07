import { renderOverview } from "./renderOverview.js";
import { renderBudget } from "./renderBudget.js";
import { renderTodos } from "./renderTodos.js";
import { toggleMenuItemActive } from "./toggleMenuItemActive.js";

let currentObj;
let currentType;

export function changeSidePanelSection(page, obj, objType, menuItem) {
  if (obj) {
    currentObj = obj;
    currentType = objType;
  } else {
    obj = currentObj;
    objType = currentType;
  }

  const currentSection = document.querySelector(".side-panel .visible");
  currentSection.classList.remove("visible");

  const nextSection = document.querySelector(`.side-panel .${page}`);
  nextSection.classList.add("visible");

  toggleMenuItemActive(menuItem);

  switch (page) {
    case "overview":
      renderOverview(obj, objType);
      break;
    case "budget":
      renderBudget(obj.budget, objType);
      break;
    case "todos":
      renderTodos(obj.todos, objType);
      break;
  }
}
