import { generateRandomId } from "../../utils/generateRandomId.js";
let activeObject = null;

export const getActiveObject = () => activeObject;

export const setActiveObject = (obj) => (activeObject = obj);

// export function calculateRemainingTodos(obj, date) {
//   return obj.todos.filter(
//     (todo) => todo.status === "pending" && todo.date === date
//   ).length;
// }

// export function calculateBudgetSummary(obj) {
//   const { income, expense } = obj.budget.reduce(
//     (totals, entry) => {
//       totals[entry.amount > 0 ? "income" : "expense"] += entry.amount;

//       return totals;
//     },
//     { income: 0, expense: 0 }
//   );

//   return { income, expense };
// }

// export const createBudgetItem = (description, amount) => {
//   return {
//     id: generateRandomId(),
//     description,
//     amount,
//   };
// };

// export const createTodoItem = (description, date) => {
//   return {
//     id: generateRandomId(),
//     description,
//     status: "pending",
//     date: date,
//   };
// };

// export const addBudgetItem = (item) => {
//   activeObject.budget.push(item);
//   return activeObject.budget;
// };

// export const addTodoItem = (item) => {
//   activeObject.todos.push(item);
//   return activeObject.todos;
// };

// export const deleteBudgetItem = (id) => {
//   const ind = activeObject.budget.findIndex((item) => item.id === id);
//   activeObject.budget.splice(ind, 1)[0];

//   return activeObject.budget;
// };

// export const deleteTodoItem = (id) => {
//   const ind = activeObject.todos.findIndex((item) => item.id === id);
//   activeObject.todos.splice(ind, 1)[0];

//   return activeObject.todos;
// };

// export const getBudgetItems = (filter) => {
//   if (filter === "income") {
//     return activeObject.budget.filter((item) => item.amount >= 0);
//   } else if (filter === "expense") {
//     return activeObject.budget.filter((item) => item.amount < 0);
//   }

//   return activeObject.budget;
// };

// export const getTodoItems = (date) => {
//   if (!date) {
//     date = getCurrentDate();
//   }

//   return activeObject.todos.filter((item) => item.date === date);
// };

// export const toggleTodoItemStatus = (id) => {
//   const ind = activeObject.todos.findIndex((item) => item.id === id);

//   if (activeObject.todos[ind].status === "pending") {
//     activeObject.todos[ind].status = "done";
//   } else {
//     activeObject.todos[ind].status = "pending";
//   }
// };
