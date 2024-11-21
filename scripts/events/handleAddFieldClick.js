import { DOM } from "../dom/domElements.js";

import { getFieldData } from "../api/getFieldData.js";
import { convertWKTToGeoJSON } from "../utils/converter.js";

import { flyToFieldBounds } from "../services/flyToFieldBounds.js";
import { renderFieldOnMap } from "../services/renderFieldOnMap.js";

import { createField } from "../models/fieldFactory.js";
import { addField } from "../api/addField.js";
import { getFieldById } from "../api/getFieldById.js";
import { renderFieldsList } from "../services/renderFieldsList.js";

export const handleAddFieldClick = async (e) => {
  e.preventDefault();
  e.stopPropagation();

  const terytValue = DOM.terytInput.value;

  const { fieldId, fieldGeometry, fieldData } = await getFieldData({
    id: terytValue,
  });

  const fieldPolygon = convertWKTToGeoJSON(fieldGeometry);

  flyToFieldBounds(fieldPolygon);

  if (getFieldById(fieldId)) {
    return;
  }

  renderFieldOnMap(fieldPolygon);

  const field = createField(fieldId, fieldGeometry, fieldData);
  addField(field);

  renderFieldsList();
};
