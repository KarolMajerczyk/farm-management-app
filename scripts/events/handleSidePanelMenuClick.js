import { renderOverview } from "../services/renderOverview.js";
import { renderBudget } from "../services/renderBudget.js";
import { renderTodos } from "../services/renderTodos.js";
import { toggleElementActive } from "../services/toggleElementActive.js";
import { getItemById } from "../db/db.js";

export async function handleSidePanelMenuClick(e) {
  if (!e.target.classList.contains("nav-item")) {
    return;
  }

  const page = e.target.dataset.page;
  const menuItem = e.target;

  const currentSection = document.querySelector(".side-panel .visible");
  currentSection.classList.remove("visible");

  const nextSection = document.querySelector(`.side-panel .${page}`);
  nextSection.classList.add("visible");

  toggleElementActive(menuItem, true);

  const objId = document.querySelector(".card-tile.active").dataset.id;
  const objType = document.querySelector(".card-tile.active").dataset.type;

  const obj = await getItemById(objType, objId);

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
