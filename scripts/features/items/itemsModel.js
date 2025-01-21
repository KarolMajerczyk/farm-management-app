import { generateRandomId } from "../../utils/generateRandomId.js";

const models = {
  fields: createFieldItem,
  herds: createHerdItem,
  machines: createMachineItem,
};

export function createListItem(type, data) {
  if (data) {
    return models[type](data);
  }

  return models[type]();
}

function createFieldItem(data) {
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

function createHerdItem() {
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

function createMachineItem() {
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
