import { convertWKTToGeoJSON } from "../utils/converter.js";
import { generateRandomId } from "../services/generateRandomId.js";

const models = {
  fields: createField,
  herds: createHerd,
  machines: createMachine,
};

export function createObject(objType, data) {
  if (data) {
    return { ...models[objType](data), budget: [], todos: [] };
  }

  return { ...models[objType](), budget: [], todos: [] };
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
  };
}
