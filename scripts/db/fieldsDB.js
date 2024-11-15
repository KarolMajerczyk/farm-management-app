const localDB = [];

export const addField = (field) => {
  if (localDB.find((obj) => obj.id === field.id)) {
    return;
  }

  localDB.push(field);
};

export const deleteField = (id) => {
  const fieldIndex = localDB.findIndex((field) => field.id === id);
  localDB.splice(fieldIndex);
};

export const editField = (id, field) => {
  const fieldIndex = localDB.findIndex((field) => field.id === id);
  localDB[fieldIndex] = field;
};

export const getFieldById = (id) => {
  const field = localDB.find((field) => field.id === id);
  return field;
};

export const getFields = () => {
  return [...localDB];
};
