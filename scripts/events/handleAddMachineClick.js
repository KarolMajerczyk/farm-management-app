import { DOM } from "../dom/domElements.js";
import { createMachine } from "../models/machineFactory.js";

import { addItem } from "../api/addItem.js";
import { getItems } from "../api/getItems.js";

import { renderCardsList } from "../services/renderCardsList.js";
import { toggleElementActive } from "../services/toggleElementActive.js";
import { toggleElementVisibility } from "../services/toggleElementVisibility.js";
import { renderOverview } from "../services/renderOverview.js";
import { renderContentList } from "../services/renderContentList.js";

export const handleAddMachineClick = async (e) => {
  e.preventDefault();

  const machine = createMachine();

  await addItem("machines", machine);

  const machines = await getItems("machines");

  renderCardsList(machines, "machine");

  const machineCard = document.querySelector(`[data-id="${machine.id}"]`);

  toggleElementActive(machineCard, true);
  toggleElementVisibility(DOM.sidePanel, true);
  renderOverview(machine, "machine");
  renderContentList(machine, "machine");
};
