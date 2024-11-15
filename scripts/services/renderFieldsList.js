import { DOM } from "../dom/domElements.js";

import { getFields } from "../db/fieldsDB.js";

export function renderFieldsList() {
  let html = "";

  const fields = getFields();

  fields.forEach((field) => {
    html += `<div id=${field.id} class="field"><p>${field.id}</p></div>`;
  });

  DOM.fieldsList.innerHTML = html;
}
