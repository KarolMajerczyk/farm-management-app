import { generateRandomId } from "../../utils/generateRandomId.js";

let activeObject = null;

export const getActiveObject = () => activeObject;

export const setActiveObject = (obj) => (activeObject = obj);

export const createTodoItem = (description) => {
  return {
    id: generateRandomId(),
    description,
    status: "pending",
  };
};

export const addTodoItem = (item) => {
  activeObject.todos.push(item);
  return activeObject.todos;
};

export const deleteTodoItem = (id) => {
  const ind = activeObject.todos.findIndex((item) => item.id === id);
  activeObject.todos.splice(ind, 1)[0];

  return activeObject.todos;
};

export const getBudgetItems = (filter) => {
  if (filter) {
  }

  return activeObject.todos;
};
