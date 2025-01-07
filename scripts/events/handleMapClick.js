import {
  convertEPSG4326ToEPSG2180,
  convertWKTToGeoJSON,
} from "../utils/converter.js";

import { getFieldData } from "../api/getFieldData.js";

import { flyToFieldBounds } from "../services/flyToFieldBounds.js";
import {
  renderFieldOnMap,
  getActiveLayer,
  removeFieldFromMap,
  resetActiveLayer,
  isTheSameLayer,
} from "../services/renderFieldOnMap.js";

import { setMapSearchFormValue } from "../services/setMapSearchFormValue.js";
import { getItemById } from "../api/getItemById.js";
import { toggleCardTileActive } from "../services/toggleCardTileActive.js";
import { hideSidePanel, showSidePanel } from "../services/toggleSidePanel.js";

import {
  showAddFieldButton,
  hideAddFieldButton,
} from "../services/toggleAddFieldButton.js";
import { changeSidePanelSection } from "../services/changeSidePanelSection.js";

export async function handleMapClick(e) {
  const epsg4326Coord = [e.latlng.lng, e.latlng.lat];
  const epsg2180Coord = convertEPSG4326ToEPSG2180(epsg4326Coord);

  const { fieldId, fieldGeometry, fieldData } = await getFieldData({
    coord: epsg2180Coord,
  });

  setMapSearchFormValue(fieldId);

  const activeLayer = getActiveLayer();
  const fieldPolygon = convertWKTToGeoJSON(fieldGeometry);

  flyToFieldBounds(fieldPolygon);

  if (activeLayer && isTheSameLayer(activeLayer, fieldPolygon)) {
    return;
  }

  if (activeLayer) {
    removeFieldFromMap(activeLayer);
  }

  const field = await getItemById("fields", fieldId);

  if (field) {
    const fieldCard = document.querySelector(`[data-id="${field.id}"]`);

    hideAddFieldButton();
    toggleCardTileActive(fieldCard);
    showSidePanel();
    changeSidePanelSection("overview", field);

    resetActiveLayer();
    return;
  }

  toggleCardTileActive();
  hideSidePanel();
  showAddFieldButton();

  renderFieldOnMap(fieldPolygon);
}
