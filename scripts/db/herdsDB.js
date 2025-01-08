export const herds = [
  {
    // INFO
    id: "herd-1",
    name: "Stado 1",
    animal: "Krowa",
    species: "Polska Biała",

    // ANIMALS
    animals: [
      {
        id: "animal-1",
        name: "Bessie",
        plate: "PL005076768502",
        age: 5,
        breed: "Holstein",
      }
    ],

    // BUDGET
    budget: [
      {
        id: "herd-entry-1",
        description: "herd-entry-1",
        amount: 2000,
        type: "expense",
        date: "2025-01-10",
      },
    ],

    // TODOS
    todos: [
      {
        id: "herd-todo-1",
        description: "herd-todo-1",
        status: "pending",
        date: "2025-01-10",
      },
    ],
  },
];
