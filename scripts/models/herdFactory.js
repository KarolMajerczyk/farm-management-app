import { generateRandomId } from "../services/generateRandomId.js";

export function createHerd() {
  return {
    // INFO
    id: generateRandomId(),
    name: "",
    image: "./images/animal.png",
    animal: "",
    species: "",

    // ANIMALS
    animals: [],

    // BUDGET
    budget: [],

    // TODOS
    todos: [],
  };
}
