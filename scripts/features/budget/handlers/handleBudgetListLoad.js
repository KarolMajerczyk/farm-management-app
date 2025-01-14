export function handleBudgetListLoad(e) {
  const menuItemSection = e.target.dataset.page;

  if (menuItemSection === "budget") {
    const cardData = document.querySelector(".card-tile.active").dataset;
    const { type, id } = cardData;

    const budget = getBudgetItems(type, id);
    renderBudgetItems(budget);
  }
}
