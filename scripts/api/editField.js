import { fields } from "../db/fieldsDB.js";

export const editField = async (id, field) => {
  const fieldIndex = fields.findIndex((field) => field.id === id);
  fields[fieldIndex] = field;
};
