import { fieldsList } from "../data/fieldsManager.js";

export function renderFieldsList() {
  const fieldsDiv = document.querySelector(".fields");
  let html = "";

  const fields = fieldsList.getAllFields();

  fields.forEach((field) => {
    html += `<div id=${field.id} class="field"><p>${field.id}</p></div>`;
  });

  fieldsDiv.innerHTML = html;
}
