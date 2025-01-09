import { DOM } from "../dom/domElements.js";
import { createHerd } from "../models/herdFactory.js";

import { addItem, getItems } from "../db/db.js";

import { renderCardsList } from "../services/renderCardsList.js";
import { toggleElementActive } from "../services/toggleElementActive.js";
import { toggleElementVisibility } from "../services/toggleElementVisibility.js";
import { renderOverview } from "../services/renderOverview.js";
import { renderContentList } from "../services/renderContentList.js";

export const handleAddHerdClick = async (e) => {
  e.preventDefault();

  const herd = createHerd();

  await addItem("herds", herd);

  const herds = await getItems("herds");

  renderCardsList(herds, "herds");

  const herdCard = document.querySelector(`[data-id="${herd.id}"]`);

  toggleElementActive(herdCard, true);
  toggleElementVisibility(DOM.sidePanel, true);
  renderOverview(herd, "herds");

  renderContentList(herd, "herds");
};
