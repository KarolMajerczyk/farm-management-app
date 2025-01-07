import { renderFieldsList } from "../services/renderFieldsList.js";

import { getFields } from "../api/getFields.js";

export async function handleCardsListLoad() {
  const fieldsList = document.getElementById("fields-list");
  const herdsList = document.getElementById("herds-list");
  const machinesList = document.getElementById("machines-list");

  if (fieldsList) {
    const fields = await getFields();
    renderFieldsList(fields);
  } else if (herdsList) {
  } else if (machinesList) {
  }
}
