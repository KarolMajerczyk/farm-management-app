export function initBudgetController() {
  document
    .querySelector("#side-menu")
    .addEventListener("click", (e) => handleBudgetListLoad(e));

  document
    .getElementById("add-budget-form")
    .addEventListener("submit", (e) => handleAddBudgetFormSubmit(e));
}
