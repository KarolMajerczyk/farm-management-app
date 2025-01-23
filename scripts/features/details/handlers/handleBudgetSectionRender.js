import { getCurrentState } from "../../../shared/state.js";
import { getItemById } from "../../../shared/storage.js";
import { filterBudgetItems } from "../detailsModel.js";
import { prepareDetailsSection, renderBudgetSection } from "../detailsView.js";

export function handleBudgetSectionRender(val) {
  prepareDetailsSection("Budżet", "budget");

  if (!val) {
    document.querySelector("#budget-filter").value = "all";
  }

  const filter = document.querySelector("#budget-filter").value;

  const { page, id } = getCurrentState();
  const item = getItemById(page, id);

  const budget = filterBudgetItems(item.budget, filter);
  renderBudgetSection(budget);
}
