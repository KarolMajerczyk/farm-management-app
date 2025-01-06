import { renderFieldOverviewSection } from "./renderFieldOverviewSection.js";
import { renderFieldBudgetSection } from "./renderFieldBudgetSection.js";
import { renderFieldTodoSection } from "./renderFieldTodoSection.js";
import { toggleMenuItemActive } from "./toggleMenuItemActive.js";

let currentField;

export function changeDetailsPanelSection(page, field, menuItem) {
  if (field) {
    currentField = field;
  } else {
    field = currentField;
  }

  const currentSection = document.querySelector(".details-section.visible");
  currentSection.classList.remove("visible");

  const nextSection = document.querySelector(`.details-section.${page}`);
  nextSection.classList.add("visible");

  toggleMenuItemActive(menuItem);

  switch (page) {
    case "overview":
      renderFieldOverviewSection(field);
      break;
    case "budget":
      renderFieldBudgetSection();
      break;
    case "todo":
      renderFieldTodoSection();
      break;
  }
}


