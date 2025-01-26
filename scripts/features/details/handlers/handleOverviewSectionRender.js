import { getCurrentState } from "../../../shared/state.js";
import { getItemById } from "../../../shared/storage.js";
import { getCurrentDate } from "../../../utils/getCurrentDate.js";
import {
  calculateBudgetSummary,
  calculateRemainingTodos,
} from "../detailsModel.js";

import {
  prepareDetailsSection,
  renderOverviewSection,
  showDetailsPanel,
} from "../detailsView.js";

export function handleOverviewSectionRender(mode) {
  showDetailsPanel();
  prepareDetailsSection("Podsumowanie", "overview");

  const { page, id } = getCurrentState();
  const item = getItemById(page, id);

  const { income, expense } = calculateBudgetSummary(item.budget);

  const date = getCurrentDate();
  const todosLeft = calculateRemainingTodos(item.todos, date);

  if (mode === "edit") {
    renderOverviewSection(page, item, income, expense, todosLeft, true);
  } else {
    renderOverviewSection(page, item, income, expense, todosLeft);
  }
}
