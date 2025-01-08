export function createMachine() {
  return {
    // INFO
    id: "machine-id",
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
