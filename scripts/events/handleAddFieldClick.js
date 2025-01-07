import { DOM } from "../dom/domElements.js";

import { getFieldData } from "../api/getFieldData.js";

import { createField } from "../models/fieldFactory.js";
import { addField } from "../api/addField.js";
import { renderCardsList } from "../services/renderCardsList.js";
import { getItems } from "../api/getItems.js";
import { toggleElementActive } from "../services/toggleElementActive.js";
import { resetActiveLayer } from "../services/renderFieldOnMap.js";
import { toggleElementVisibility } from "../services/toggleElementVisibility.js";
import { renderOverview } from "../services/renderOverview.js";

export const handleAddFieldClick = async (e) => {
  e.preventDefault();
  e.stopPropagation();

  resetActiveLayer();

  const terytValue = DOM.terytInput.value;

  const { fieldId, fieldGeometry, fieldData } = await getFieldData({
    id: terytValue,
  });

  const field = createField(fieldId, fieldGeometry, fieldData);

  await addField(field);

  const fields = await getItems("fields");

  renderCardsList(fields, "field");

  const fieldCard = document.querySelector(`[data-id="${field.id}"]`);

  toggleElementActive(fieldCard, true);

  toggleElementVisibility(DOM.addFieldButton, false);
  toggleElementVisibility(DOM.sidePanel, true);

  renderOverview(field, "field");
};
