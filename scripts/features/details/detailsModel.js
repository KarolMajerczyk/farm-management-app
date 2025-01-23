import { generateRandomId } from "../../utils/generateRandomId.js";

export function calculateBudgetSummary(budget) {
  const { income, expense } = budget.reduce(
    (totals, entry) => {
      totals[entry.amount > 0 ? "income" : "expense"] += entry.amount;

      return totals;
    },
    { income: 0, expense: 0 }
  );

  return { income, expense };
}

export const filterBudgetItems = (budget, filter) => {
  if (filter === "income") {
    return budget.filter((item) => item.amount >= 0);
  } else if (filter === "expense") {
    return budget.filter((item) => item.amount < 0);
  }

  return budget;
};

export function calculateRemainingTodos(todos, date) {
  return todos.filter((todo) => todo.status === "pending" && todo.date === date)
    .length;
}

export const filterTodoItems = (todos, date) => {
  return todos.filter((item) => item.date === date);
};

export const createBudgetItem = (description, amount) => {
  return {
    id: generateRandomId(),
    description,
    amount,
  };
};

export const createTodoItem = (description, date) => {
  return {
    id: generateRandomId(),
    description,
    status: "pending",
    date: date,
  };
};
