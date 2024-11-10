const fieldsManager = () => {
  console.log("Hi");
  const fieldsList = [];

  const addField = (field) => {
    fieldsList.push(field);
  };

  const findFieldById = (id) => {
    return fieldsList.find((field) => field.id === id);
  };

  const getAllFields = () => {
    return [...fieldsList];
  };

  return { addField, findFieldById, getAllFields };
};

const fieldsList = fieldsManager();

export { fieldsList };
