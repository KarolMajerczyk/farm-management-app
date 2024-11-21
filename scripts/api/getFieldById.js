import { fields } from "../db/fieldsDB.js";

export const getFieldById = async (id) => {
  const field = fields.find((field) => field.id === id);
  return field;
};
