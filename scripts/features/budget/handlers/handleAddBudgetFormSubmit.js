export function handleAddBudgetFormSubmit(e) {
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
