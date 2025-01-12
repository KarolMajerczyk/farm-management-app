export const renderField = (fieldData) => {
  const list = document.getElementById("fieldsList");
  const fieldElement = document.createElement("li");

  fieldElement.innerHTML = `
      <span>${fieldData.name}</span>
      <button data-id="${fieldData.id}" class="delete-field">Usuń</button>
    `;

  list.appendChild(fieldElement);
};
