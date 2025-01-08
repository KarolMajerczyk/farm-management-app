import { generateRandomId } from "../services/generateRandomId.js";

export function createMachine() {
  return {
    // INFO
    id: generateRandomId(),
    name: "",
    image: "./images/machine.png",
    plate: "",
    type: "",
    hoursUsed: 0,

    // FILES
    files: [],

    // BUDGETS
    budget: [],

    // TODOS
    todos: [],
  };
}
