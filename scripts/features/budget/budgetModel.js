import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../../shared/storage.js";

import { generateRandomId } from "../../utils/generateRandomId.js";

export const createBudgetItem = (description, amount) => {
  return {
    id: generateRandomId(),
    description,
    amount,
  };
};

export const getBudgetItems = (type, id) => {
  const data = loadFromLocalStorage(type);
  const obj = data.find((item) => item.id === id);

  return obj.budget;
};

export const addBudgetItem = (type, id, item) => {
  const data = loadFromLocalStorage(type);

  const index = data.findIndex((item) => item.id === id);
  data[index].budget.push(item);

  saveToLocalStorage(type, data);
};

// export const removeBudgetItem = (id) => {};
