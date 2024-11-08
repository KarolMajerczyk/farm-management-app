const fieldsList = [];

export function addField(field) {
  fieldsList.push(field);
}

export function findFieldById(id) {
  fieldsList.find((field) => field.id === id);
}

export function getFieldsList() {
  return fieldsList;
}
