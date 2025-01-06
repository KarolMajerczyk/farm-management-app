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
        id: "entry-1",
        type: "income",
        amount: 2000,
        description: "entry-1",
      },
    ],

    // TODOS
    todos: [
      {
        id: "todo-1",
        description: "todo-1",
        status: "pending",
        date: "2025-01-10",
      },
    ],
  },
];
