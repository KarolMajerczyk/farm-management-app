import { fields } from "../db/fieldsDB.js";

export const getFields = async () => {
  return [...fields];
};
