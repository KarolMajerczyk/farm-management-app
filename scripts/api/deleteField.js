import { fields } from "../db/fieldsDB.js";

export const deleteField = async (id) => {
  const fieldIndex = fields.findIndex((field) => field.id === id);
  fields.splice(fieldIndex);
};
