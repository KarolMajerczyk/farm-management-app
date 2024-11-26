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
import { getFieldById } from "../api/getFieldById.js";
import { toggleCardTileActive } from "../services/toggleCardTileActive.js";
import {
  hideDetailsPanel,
  showDetailsPanel,
} from "../services/toggleDetailsPanel.js";

import {
  showAddFieldButton,
  hideAddFieldButton,
} from "../services/toggleAddFieldButton.js";
import { changeDetailsPanelSection } from "../services/changeDetailsPanelSection.js";

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
  const field = await getFieldById(fieldId);

  if (activeLayer && isTheSameLayer(activeLayer, fieldPolygon)) {
    return;
  }

  if (activeLayer) {
    removeFieldFromMap(activeLayer);
  }

  if (field) {
    const fieldCard = document.querySelector(`[data-id="${field.id}"]`);

    hideAddFieldButton();
    toggleCardTileActive(fieldCard);
    showDetailsPanel();
    changeDetailsPanelSection("overview", field);

    resetActiveLayer();
    return;
  }

  toggleCardTileActive();
  hideDetailsPanel();
  showAddFieldButton();

  // TODO: render add field or something like that
  renderFieldOnMap(fieldPolygon);
}
