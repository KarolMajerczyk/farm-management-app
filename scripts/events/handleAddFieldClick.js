import { DOM } from "../dom/domElements.js";
import { createField } from "../models/fieldFactory.js";

import { addItem } from "../api/addItem.js";
import { getItems } from "../api/getItems.js";

import { getFieldData } from "../api/getFieldData.js";
import { resetActiveLayer } from "../services/renderFieldOnMap.js";

import { renderCardsList } from "../services/renderCardsList.js";
import { toggleElementActive } from "../services/toggleElementActive.js";
import { toggleElementVisibility } from "../services/toggleElementVisibility.js";
import { renderOverview } from "../services/renderOverview.js";

export const handleAddFieldClick = async (e) => {
  e.preventDefault();

  resetActiveLayer();

  const terytValue = DOM.terytInput.value;

  const { fieldId, fieldGeometry, fieldData } = await getFieldData({
    id: terytValue,
  });

  const field = createField(fieldId, fieldGeometry, fieldData);

  await addItem("fields", field);

  const fields = await getItems("fields");

  renderCardsList(fields, "field");

  const fieldCard = document.querySelector(`[data-id="${field.id}"]`);

  toggleElementActive(fieldCard, true);

  toggleElementVisibility(DOM.addFieldButton, false);
  toggleElementVisibility(DOM.sidePanel, true);

  renderOverview(field, "field");
};
