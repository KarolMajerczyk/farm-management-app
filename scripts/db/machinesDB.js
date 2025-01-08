export const machines = [
  {
    // INFO
    id: "machine-2",
    name: "Ursus C360",
    plate: "KLI 4341C",
    type: "traktor",
    hoursUsed: 1200,

    // FILES
    files: [
      {
        id: "file-1",
        name: "nazwa-pliku",
        type: "image",
        date: "2025-01-10",
      },
    ],

    // BUDGETS
    budget: [
      {
        id: "machine-entry-1",
        description: "machine-entry-1",
        amount: 2000,
        type: "income",
        date: "2025-01-10",
      },
    ],

    // TODOS
    todos: [
      {
        id: "machine-todo-1",
        description: "machine-todo-1",
        status: "pending",
        date: "2025-01-10",
      },
    ],
  },
];
