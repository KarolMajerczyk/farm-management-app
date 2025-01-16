import { generateRandomId } from "../../utils/generateRandomId.js";

let activeObject = null;

export const getActiveObject = () => activeObject;

export const setActiveObject = (obj) => (activeObject = obj);

export const createBudgetItem = (description, amount) => {
  return {
    id: generateRandomId(),
    description,
    amount,
  };
};

export const addBudgetItem = (item) => {
  activeObject.budget.push(item);
  return activeObject.budget;
};

export const deleteBudgetItem = (id) => {
  const ind = activeObject.budget.findIndex((item) => item.id === id);
  activeObject.budget.splice(ind, 1)[0];

  return activeObject.budget;
};

export const getBudgetItems = (filter) => {
  if (filter === "income") {
    return activeObject.budget.filter((item) => item.amount >= 0);
  } else if (filter === "expense") {
    return activeObject.budget.filter((item) => item.amount < 0);
  }

  return activeObject.budget;
};
