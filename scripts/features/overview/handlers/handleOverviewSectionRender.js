import { getCurrentDate } from "../../../utils/getCurrentDate.js";
import {
  calculateBudgetSummary,
  calculateRemainingTodos,
} from "../overviewModel.js";

import {
  renderBudgetSummary,
  renderObjectSummary,
  renderTodosSummary,
} from "../overviewView.js";

export function handleOverviewSectionRender(obj) {
  const type = document.querySelector("#items-list").dataset.type;

  const date = getCurrentDate();
  const todosLeft = calculateRemainingTodos(obj, date);
  const { income, expense } = calculateBudgetSummary(obj);

  renderObjectSummary(type, obj);
  renderBudgetSummary(income, expense);
  renderTodosSummary(todosLeft);
}
