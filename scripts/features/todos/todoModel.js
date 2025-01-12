import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../../shared/storage.js";

import { generateRandomId } from "../../utils/generateRandomId.js";

export const createTodoItem = (description) => {
  return {
    id: generateRandomId(),
    description,
    status: "pending",
  };
};

export const getTodoItems = (type, id) => {
  const data = loadFromLocalStorage(type);
  const obj = data.find((item) => item.id === id);

  return obj.todos;
};

export const addTodoItem = (type, id, item) => {
  const data = loadFromLocalStorage(type);

  const index = data.findIndex((item) => item.id === id);
  data[index].todos.push(item);

  saveToLocalStorage(type, data);
};

// export const removeTodo = (id) => {};
