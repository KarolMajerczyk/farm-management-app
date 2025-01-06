import { fields } from "../db/fieldsDB.js";

export const addField = async (field) => {
  if (fields.find((obj) => obj.id === field.id)) {
    return;
  }

  fields.push(field);
};


