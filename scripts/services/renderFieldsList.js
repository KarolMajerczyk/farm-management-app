import { fieldsDB } from "../db/fieldsDB.js";

export function renderFieldsList() {
  const fieldsDiv = document.querySelector(".fields");
  let html = "";

  const fields = fieldsDB.getFields();

  fields.forEach((field) => {
    html += `<div id=${field.id} class="field"><p>${field.id}</p></div>`;
  });

  fieldsDiv.innerHTML = html;
}
