import { eventBus } from "../../../shared/eventBus.js";
import { getCurrentState } from "../../../shared/state.js";
import { getItemById, updateItem } from "../../../shared/storage.js";

export function handleOverviewSectionUpdate(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  form.reset();

  const { page, id } = getCurrentState();
  const item = getItemById(page, id);

  for (let [key, value] of data.entries()) {
    item[key] = value;
  }

  updateItem(page, item);
  eventBus.emit("itemUpdated");
}

// export function handleBudgetItemAdd(e) {
//   e.preventDefault();
//   document.querySelector("#budget-filter").value = "all";

//   const form = e.target;
//   const data = new FormData(form);

//   const description = data.get("description");
//   const amount = parseInt(data.get("amount"));

//   form.reset();

//   const { page, id } = getCurrentState();
//   const item = getItemById(page, id);

//   const budgetItem = createBudgetItem(description, amount);
//   item.budget.push(budgetItem);

//   renderBudgetSection(item.budget);
//   updateItem(page, item);
// }
