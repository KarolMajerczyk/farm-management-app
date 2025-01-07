import { fields } from "../db/fieldsDB.js";
import { herds } from "../db/herdsDB.js";
import { machines } from "../db/machinesDB.js";

export const getItemById = async (db, id) => {
  switch (db) {
    case "field":
      return fields.find((field) => field.id === id);
    case "herd":
      return herds.find((herd) => herd.id === id);
    case "machine":
      return machines.find((machine) => machine.id === id);
  }
};
