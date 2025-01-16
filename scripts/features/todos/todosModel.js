import { generateRandomId } from "../../utils/generateRandomId.js";

let activeObject = null;

export const getActiveObject = () => activeObject;

export const setActiveObject = (obj) => (activeObject = obj);

export const createTodoItem = (description, date) => {
  return {
    id: generateRandomId(),
    description,
    status: "pending",
    date: date,
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

export const getTodoItems = (date) => {
  if (!date) {
    date = getCurrentDate();
  }

  return activeObject.todos.filter((item) => item.date === date);
};

export const toggleTodoItemStatus = (id) => {
  const ind = activeObject.todos.findIndex((item) => item.id === id);

  if (activeObject.todos[ind].status === "pending") {
    activeObject.todos[ind].status = "done";
  } else {
    activeObject.todos[ind].status = "pending";
  }
};
