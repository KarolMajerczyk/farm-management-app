import { generateRandomId } from "../utils/generateRandomId.js";

export function createMachineItem() {
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
