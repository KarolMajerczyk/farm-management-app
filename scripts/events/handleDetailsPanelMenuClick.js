import { renderFieldOverviewSection } from "../services/renderFieldOverviewSection.js";
import { renderFieldBudgetSection } from "../services/renderFieldBudgetSection.js";
import { renderFieldTodoSection } from "../services/renderFieldTodoSection.js";

export function handleDetailsPanelMenuClick(e) {
  const currentSection = document.querySelector(".details-section.visible");
  currentSection.classList.remove("visible");

  const page = e.target.dataset.page;

  const nextSection = document.querySelector(`.details-section.${page}`);
  nextSection.classList.add("visible");

  switch (page) {
    case "overview":
      renderFieldOverviewSection();
      break;
    case "budget":
      renderFieldBudgetSection();
      break;
    case "todo":
      renderFieldTodoSection();
      break;
  }
}
