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
} from "../detailsView.js";

export function handleOverviewSectionRender(e) {
  prepareDetailsSection("Podsumowanie", "overview");

  const { page, id } = getCurrentState();
  const item = getItemById(page, id);

  const { income, expense } = calculateBudgetSummary(item.budget);

  const date = getCurrentDate();
  const todosLeft = calculateRemainingTodos(item.todos, date);

  renderOverviewSection(page, item, income, expense, todosLeft);
}
