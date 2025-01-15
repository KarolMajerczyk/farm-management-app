export function calculateRemainingTodos(obj) {
  return obj.todos.filter((todo) => todo.status === "pending").length;
}

export function calculateBudgetSummary(obj) {
  const { income, expense } = obj.budget.reduce(
    (totals, entry) => {
      totals[entry.amount > 0 ? "income" : "expense"] += entry.amount;

      return totals;
    },
    { income: 0, expense: 0 }
  );

  return { income, expense };
}
