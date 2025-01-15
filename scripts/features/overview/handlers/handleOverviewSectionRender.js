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

  const todosLeft = calculateRemainingTodos(obj);
  const { income, expense } = calculateBudgetSummary(obj);

  renderObjectSummary(type, obj);
  renderBudgetSummary(income, expense);
  renderTodosSummary(todosLeft);
}
