import {
  addBudgetItem,
  createBudgetItem,
  getBudgetItems,
} from "./budgetModel.js";

import { renderBudgetItems } from "./budgetView.js";

// ---------------- //
// EVENTS
// ---------------- //

export function initBudget() {
  document
    .querySelector("#side-menu")
    .addEventListener("click", (e) => handleBudgetListLoad(e));

  document
    .getElementById("add-budget-form")
    .addEventListener("submit", (e) => handleAddBudgetFormSubmit(e));
}

function handleBudgetListLoad(e) {
  const menuItemSection = e.target.dataset.page;

  if (menuItemSection === "budget") {
    const cardData = document.querySelector(".card-tile.active").dataset;
    const { type, id } = cardData;

    const budget = getBudgetItems(type, id);
    renderBudgetItems(budget);
  }
}

function handleAddBudgetFormSubmit(e) {
  e.preventDefault();

  const cardData = document.querySelector(".card-tile.active").dataset;
  const { type, id } = cardData;

  const form = e.target;
  const data = new FormData(form);

  const description = data.get("description");
  const amount = parseInt(data.get("amount"));

  const budgetItem = createBudgetItem(description, amount);
  addBudgetItem(type, id, budgetItem);

  const budget = getBudgetItems(type, id);
  renderBudgetItems(budget);

  form.reset();
}

// document.getElementById("date-picker").addEventListener("change", () => {});

// document.getElementById("todos-list").addEventListener("click", () => {});
