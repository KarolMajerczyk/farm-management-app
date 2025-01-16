import { generateRandomId } from "../../utils/generateRandomId.js";

let activeObject = null;

export const getActiveObject = () => activeObject;

export const setActiveObject = (obj) => (activeObject = obj);

export function createAnimalItem() {
  return {
    id: generateRandomId(),
    name: "nazwa",
    plate: "tablica",
    age: 0,
  };
}

export function createFileItem() {
  return {
    id: generateRandomId(),
    name: "nazwa-pliku",
    date: "data-pliku",
  };
}

export const addContentItem = (type, item) => {
  activeObject[type].push(item);
  return activeObject;
};

export const createTodoItem = (description) => {};

export const deleteContentItem = (type, id) => {
  const ind = activeObject[type].findIndex((item) => item.id === id);
  activeObject[type].splice(ind, 1)[0];

  return activeObject[type];
};

export const getContentItems = (type, filter) => {
  if (filter) {
  }

  return activeObject[type];
};
