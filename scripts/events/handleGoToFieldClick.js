import { DOM } from "../dom/domElements.js";

import { fetchFieldData } from "../api/fetchFieldData.js";
import { convertWKTToGeoJSON } from "../utils/converter.js";

import { flyToFieldBounds } from "../services/flyToFieldBounds.js";
import { renderFieldOnMap } from "../services/renderFieldOnMap.js";

// 120709_2.0007.4719

export const handleGoToFieldClick = async (e) => {
  e.preventDefault();
  e.stopPropagation();

  const terytValue = DOM.terytInput.value;

  const { fieldGeometry } = await fetchFieldData({
    id: terytValue,
  });

  const fieldPolygon = convertWKTToGeoJSON(fieldGeometry);

  flyToFieldBounds(fieldPolygon);
  renderFieldOnMap(fieldPolygon);
};