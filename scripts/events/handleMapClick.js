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

  // naciśnięcie na to samo zaznaczone już pole
  if (activeLayer && isTheSameLayer(activeLayer, fieldPolygon)) {
    return;
  }

  const field = await getFieldById(fieldId);

  if (field && activeLayer) {
    removeFieldFromMap(activeLayer);
    resetActiveLayer();
    return;
  }

  if (activeLayer) {
    removeFieldFromMap(activeLayer);
  }

  renderFieldOnMap(fieldPolygon);
}
