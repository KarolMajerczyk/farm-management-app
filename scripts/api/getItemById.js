import { fields } from "../db/fieldsDB.js";
import { herds } from "../db/herdsDB.js";
import { machines } from "../db/machinesDB.js";

export const getItemById = async (db, id) => {
  switch (db) {
    case "fields":
      return fields.find((field) => field.id === id);
    case "herds":
      return herds.find((herd) => herd.id === id);
    case "machines":
      return machines.find((machine) => machine.id === id);
  }
};
