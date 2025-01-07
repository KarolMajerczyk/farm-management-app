import { renderFieldsList } from "../services/renderFieldsList.js";
import { renderHerdsList } from "../services/renderHerdsList.js";
import { renderMachinesList } from "../services/renderMachinesList.js";

import { getItems } from "../api/getItems.js";

export async function handleCardsListLoad() {
  const fieldsList = document.getElementById("fields-list");
  const herdsList = document.getElementById("herds-list");
  const machinesList = document.getElementById("machines-list");

  if (fieldsList) {
    const fields = await getItems("fields");
    renderFieldsList(fields);
  } else if (herdsList) {
    const herds = await getItems("herds");
    renderHerdsList(herds);
  } else if (machinesList) {
    const machines = await getItems("machines");
    renderMachinesList(machines);
  }
}
