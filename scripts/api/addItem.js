import { fields } from "../db/fieldsDB.js";
import { herds } from "../db/herdsDB.js";
import { machines } from "../db/machinesDB.js";

export const addItem = async (db, item) => {
  switch (db) {
    case "fields":
      if (fields.find((obj) => obj.id === item.id)) {
        return;
      }
      fields.push(item);
      break;
    case "herds":
      herds.push(item);
      break;
    case "machines":
      machines.push(item);
      break;
  }
};
