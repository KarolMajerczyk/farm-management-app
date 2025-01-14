import {
  convertEPSG4326ToEPSG2180,
  convertWKTToGeoJSON,
} from "../../../utils/converter.js";

import { getFieldData } from "../../../shared/getFieldData.js";

import {
  flyToFieldBounds,
  removeFieldFromMap,
  renderFieldOnMap,
  setMapSearchFormValue,
} from "../mapView.js";

import {
  map,
  getActiveLayer,
  getMapLayer,
  setActiveLayer,
} from "../mapModel.js";

import { eventBus } from "../../../shared/eventBus.js";

export async function handleMapClick(e) {
  const epsg4326Coord = [e.latlng.lng, e.latlng.lat];
  const epsg2180Coord = convertEPSG4326ToEPSG2180(epsg4326Coord);

  const { id, location } = await getFieldData({
    coord: epsg2180Coord,
  });

  setMapSearchFormValue(id);

  const polygon = convertWKTToGeoJSON(location);
  flyToFieldBounds(map, polygon);

  const activeLayer = getActiveLayer();

  if (activeLayer) {
    removeFieldFromMap(map, activeLayer);
  }

  if (getMapLayer(id)) {
    eventBus.emit("fieldLayerSelected", id);
    return;
  }

  const layer = renderFieldOnMap(map, polygon);
  setActiveLayer(layer);
}
