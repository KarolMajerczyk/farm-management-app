import { generateRandomId } from "../utils/generateRandomId.js";

export function createHerdItem() {
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
