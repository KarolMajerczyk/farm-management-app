import { fields } from "../db/fieldsDB.js";
import { herds } from "../db/herdsDB.js";
import { machines } from "../db/machinesDB.js";

export const getItems = async (db) => {
  switch (db) {
    case "fields":
      return [...fields];
    case "herds":
      return [...herds];
    case "machines":
      return [...machines];
  }
};
