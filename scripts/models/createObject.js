import { convertWKTToGeoJSON } from "../utils/converter.js";
import { generateRandomId } from "../services/generateRandomId.js";

const models = {
  fields: createField,
  herds: createHerd,
  machines: createMachine,
};

export function createObject(objType) {
  return { ...models[objType](), budget: [], todos: [] };
}

export function createField(id, geojson, data) {
  return {
    id: data[1],
    name: "Nazwa pola",
    number: data[6],
    area: 0.5,
    image: "./images/field.png",

    region: data[5],
    voivodeship: data[2],
    location: convertWKTToGeoJSON(geojson),

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
