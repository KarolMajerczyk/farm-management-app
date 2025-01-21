import { getCurrentDate } from "../../../utils/getCurrentDate.js";
import {
  calculateBudgetSummary,
  calculateRemainingTodos,
} from "../../overview/overviewModel.js";

import {
  renderBudgetSummary,
  renderObjectSummary,
  renderTodosSummary,
} from "../../overview/overviewView.js";

export function handleOverviewSectionRender(obj) {
  const type = document.querySelector("#items-list").dataset.type;

  const date = getCurrentDate();
  const todosLeft = calculateRemainingTodos(obj, date);
  const { income, expense } = calculateBudgetSummary(obj);

  renderObjectSummary(type, obj);
  renderBudgetSummary(income, expense);
  renderTodosSummary(todosLeft);
}

export function handleBudgetSectionRender(obj) {
  document.querySelector(".budget #dropdown").selectedIndex = 0;
  renderBudgetItems(obj.budget);
}

export function handleTodosSectionRender(obj) {
  const date = getCurrentDate();
  document.querySelector(".todos #date-picker").value = date;

  const todos = getTodoItems(date);
  renderTodoItems(todos);
}

export function handleTodoItemCheckboxChange(e) {
  const todoId = e.target.parentElement.dataset.id;
  toggleTodoItemStatus(todoId);
}

export function handleTodosDateChange(e) {
  const todos = getTodoItems(e.target.value);
  renderTodoItems(todos);
}

export function handleBudgetFilterChange(e) {
  const filter = e.target.value;
  const budget = getBudgetItems(filter);

  renderBudgetItems(budget);
}
