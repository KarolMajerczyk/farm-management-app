import { fields } from "../db/fieldsDB.js";
import { herds } from "../db/herdsDB.js";
import { machines } from "../db/machinesDB.js";

export const deleteItem = async (db, id) => {
  switch (db) {
    case "field":
      const fieldInd = fields.findIndex((field) => field.id === id);
      fields.splice(fieldInd, 1);
      break;
    case "herd":
      const herdInd = herds.findIndex((field) => field.id === id);
      herds.splice(herdInd, 1);
      break;
    case "machine":
      const machineInd = machines.findIndex((field) => field.id === id);
      machines.splice(machineInd, 1);
      break;
  }
};
