import { DOM } from "../dom/domElements.js";

import { getFields } from "../db/fieldsDB.js";

export async function renderFieldsList() {
  let html = "";

  const fields = await getFields();

  fields.forEach((field) => {
    html += `<div id=${field.id} class="field">
      <p style="font-size: 18px;"><b>Działka nr. ${
        field.id.split(".")[2]
      }</b></p>
      <div class="field-type">
        <img src="../images/${field.seed}.png">
        <p>${field.seed}</p>
      </div>
    </div>`;
  });

  DOM.fieldsList.innerHTML = html;
}
