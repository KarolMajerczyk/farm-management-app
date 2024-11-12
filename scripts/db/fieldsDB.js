const localDB = [];

const addField = (field) => {
  console.log("ADD FIELD");

  localDB.push(field);
};

const deleteField = (id) => {
  console.log("DELETE FIELD");

  const fieldIndex = localDB.findIndex((field) => field.id === id);
  localDB.splice(fieldIndex);
};

const editField = (id, field) => {
  console.log("EDIT FIELD");

  const fieldIndex = localDB.findIndex((field) => field.id === id);
  localDB[fieldIndex] = field;
};

const getFieldById = (id) => {
  console.log("GET FIELD");

  const field = localDB.find((field) => field.id === id);
  return field;
};

const getFields = () => {
  console.log("GET FIELDS");

  return [...localDB];
};

export const fieldsDB = {
  addField,
  deleteField,
  editField,
  getFieldById,
  getFields,
};

// const fieldsManager = () => {
//   const fieldsList = [];

//   const addField = (field) => {
//     fieldsList.push(field);
//   };

//   const findFieldById = (id) => {
//     return fieldsList.find((field) => field.id === id);
//   };

//   const getAllFields = () => {
//     return [...fieldsList];
//   };

//   return { addField, findFieldById, getAllFields };
// };

// const fieldsList = fieldsManager();

// export { fieldsList };

// const createFieldManager = () => {
//   const fieldsList = [];

//   const addField = (field) => {
//     fieldsList.push(field);
//   };

//   const findFieldById = (id) => {
//     return fieldsList.find((field) => field.id === id);
//   };

//   const getAllFields = () => {
//     return [...fieldsList];
//   };

//   return { addField, findFieldById, getAllFields };
// };

// const fieldManager = createFieldManager();

// export { fieldManager };

// // dbManager.js
// const fetchData = async (query) => {
//   const response = await fetch(`/api/db?query=${encodeURIComponent(query)}`);
//   return response.json();
// };

// const saveData = async (data) => {
//   const response = await fetch(`/api/db`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data)
//   });
//   return response.ok;
// };

// export const dbManager = { fetchData, saveData };

// // app.js
// import { dbManager } from './dbManager.js';

// dbManager.fetchData("SELECT * FROM example_table")
//     .then(data => console.log("Fetched data:", data));

// dbManager.saveData({ id: 1, value: "Sample Data" })
//     .then(success => console.log("Data saved:", success));
