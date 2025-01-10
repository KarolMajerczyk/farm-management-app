import { getActiveLayer } from "../services/renderFieldOnMap.js";
import { convertWKTToGeoJSON } from "../utils/converter.js";
import { generateRandomId } from "../utils/generateRandomId.js";

const models = {
  fields: createField,
  herds: createHerd,
  machines: createMachine,
  todo: createTodoItem,
  budget: createBudgetItem,
};

export function createObject(objType, data) {
  if (data) {
    return models[objType](data);
  }

  return models[objType]();
}

export function createField(data) {
  return {
    id: data.fieldData[1],
    name: "Nazwa pola",
    number: data.fieldData[6],
    area: 0.5,
    image: "./images/field.png",

    region: data.fieldData[5],
    voivodeship: data.fieldData[2],
    location: convertWKTToGeoJSON(data.fieldGeometry),

    plant: "Typ uprawy",
    seed: "Typ sadzonki",

    budget: [],
    todos: [],
  };
}

export function createHerd() {
  return {
    id: generateRandomId(),
    name: "",
    image: "./images/animal.png",
    animal: "",
    species: "",

    animals: [],
    budget: [],
    todos: [],
  };
}

export function createMachine() {
  return {
    id: generateRandomId(),
    name: "",
    image: "./images/machine.png",
    plate: "",
    type: "",
    hoursUsed: 0,

    files: [],
    budget: [],
    todos: [],
  };
}

export function createTodoItem() {
  return {
    id: generateRandomId(),
  };
}

export function createBudgetItem() {
  return {
    id: generateRandomId(),
  };
}
