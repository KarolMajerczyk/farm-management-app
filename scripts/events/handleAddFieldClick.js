import { DOM } from "../dom/domElements.js";

import { getFieldData } from "../api/getFieldData.js";

import { createField } from "../models/fieldFactory.js";
import { addField } from "../api/addField.js";
import { renderFieldsList } from "../services/renderFieldsList.js";
import { getItems } from "../api/getItems.js";
import { hideAddFieldButton } from "../services/toggleAddFieldButton.js";
import { toggleCardTileActive } from "../services/toggleCardTileActive.js";
import { showSidePanel } from "../services/toggleSidePanel.js";
import { resetActiveLayer } from "../services/renderFieldOnMap.js";
import { changeSidePanelSection } from "../services/changeSidePanelSection.js";

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

  renderFieldsList(fields);

  const fieldCard = document.querySelector(`[data-id="${field.id}"]`);

  toggleCardTileActive(fieldCard);

  hideAddFieldButton();
  showSidePanel();
  changeSidePanelSection("overview", field);
};
