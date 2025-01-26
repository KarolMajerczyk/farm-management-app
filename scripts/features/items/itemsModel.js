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
    name: "",
    number: data.parcel,
    area: 0.5,
    image: "./images/field.svg",

    region: data.region,
    voivodeship: data.voivodeship,
    location: data.location,

    plant: "",
    seed: "",

    budget: [],
    todos: [],
  };
}

function createHerdItem() {
  return {
    id: generateRandomId(),
    name: "",
    image: "./images/pet.svg",
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
    name: "",
    image: "./images/tractor.svg",
    plate: "",
    type: "",
    hoursUsed: 0,

    files: [],
    budget: [],
    todos: [],
  };
}
