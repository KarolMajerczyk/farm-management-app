import { DOM } from "../dom/domElements.js";

import { getFieldData } from "../api/getFieldData.js";

import { controlMapRenderPolygons } from "../services/controlMapRenderPolygon.js";

export const handleMapSearch = async (e) => {
  e.preventDefault();
  e.stopPropagation();

  if (e.target.id !== "goto-field") {
    return;
  }

  const terytValue = DOM.terytInput.value;

  const { fieldGeometry } = await getFieldData({
    id: terytValue,
  });

  controlMapRenderPolygons(terytValue, fieldGeometry);
};
