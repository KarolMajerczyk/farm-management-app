import { saveToStorage, loadFromStorage } from "../../shared/storage.js";

export const createTodo = ({ name, size, location }) => {
  return {};
};

export const addTodo = (fieldData) => {
  const fields = loadFromStorage("fields") || [];
  fields.push(fieldData);
  saveToStorage("fields", fields);
};

export const removeTodo = (fieldId) => {
  const fields = loadFromStorage("fields") || [];
  const updatedFields = fields.filter((field) => field.id !== fieldId);
  saveToStorage("fields", updatedFields);
};

export const getTodos = () => {
  return loadFromStorage("fields") || [];
};
