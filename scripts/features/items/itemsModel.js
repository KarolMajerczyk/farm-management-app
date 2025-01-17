import { generateRandomId } from "../../utils/generateRandomId.js";

import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../../shared/storage.js";

export const addItem = (dbName, item) => {
  const db = loadFromLocalStorage(dbName);

  if (db.find((obj) => obj.id === item.id)) {
    return;
  }

  db.push(item);

  saveToLocalStorage(dbName, db);
};

export const deleteItem = async (dbName, id) => {
  const db = loadFromLocalStorage(dbName);

  const objInd = db.findIndex((obj) => obj.id === id);

  const obj = db.splice(objInd, 1)[0];

  saveToLocalStorage(dbName, db);

  return obj.id;
};

export const updateItem = (dbName, item) => {
  const db = loadFromLocalStorage(dbName);

  const objInd = db.findIndex((obj) => obj.id === item.id);
  db[objInd] = item;

  saveToLocalStorage(dbName, db);
};

export const getItemById = (dbName, id) => {
  const db = loadFromLocalStorage(dbName);

  return db.find((obj) => obj.id === id);
};

export const getItems = (dbName) => {
  const db = loadFromLocalStorage(dbName);

  return [...db];
};

export function createFieldItem(data) {
  return {
    id: data.id,
    name: "Nazwa pola",
    number: data.parcel,
    area: 0.5,
    image: "./images/field.png",

    region: data.region,
    voivodeship: data.voivodeship,
    location: data.location,

    plant: "Typ uprawy",
    seed: "Typ sadzonki",

    budget: [],
    todos: [],
  };
}

export function createHerdItem() {
  return {
    id: generateRandomId(),
    name: "Nazwa stada",
    image: "./images/animal.png",
    animal: "",
    species: "",

    animals: [],
    budget: [],
    todos: [],
  };
}

export function createMachineItem() {
  return {
    id: generateRandomId(),
    name: "Nazwa maszyny",
    image: "./images/machine.png",
    plate: "XXXXXXXX",
    type: "Typ maszyny",
    hoursUsed: 0,

    files: [],
    budget: [],
    todos: [],
  };
}
