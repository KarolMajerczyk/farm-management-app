import { getFieldsList } from "../data/fieldsListManager.js";

export function renderFieldsList() {
  const fieldsDiv = document.querySelector(".fields");
  let html = "";

  const fieldsList = getFieldsList();

  fieldsList.forEach((field) => {
    html += `<div id=${field.id} class="field"><p>${field.id}</p></div>`;
  });

  fieldsDiv.innerHTML = html;
}
