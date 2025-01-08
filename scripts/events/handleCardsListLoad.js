import { renderCardsList } from "../services/renderCardsList.js";

import { getItems } from "../db/db.js";

export async function handleCardsListLoad() {
  const fieldsList = document.getElementById("fields-list");
  const herdsList = document.getElementById("herds-list");
  const machinesList = document.getElementById("machines-list");

  if (fieldsList) {
    const fields = await getItems("fields");
    renderCardsList(fields, "field");
  } else if (herdsList) {
    const herds = await getItems("herds");
    renderCardsList(herds, "herd");
  } else if (machinesList) {
    const machines = await getItems("machines");
    renderCardsList(machines, "machine");
  }
}
