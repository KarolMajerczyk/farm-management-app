export const machines = [
  {
    // INFO
    id: "machine-2",
    name: "Ursus C360",

    type: "traktor",
    status: "Operational",
    lastMaintenance: "2024-12-15",
    nextMaintenance: "2025-06-15",
    hoursUsed: 1200,

    // BUDGETS
    budget: [
      {
        id: "machine-entry-1",
        description: "machine-entry-1",
        amount: 2000,
        type: "income",
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
