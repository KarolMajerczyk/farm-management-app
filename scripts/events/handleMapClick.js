import {
  convertEPSG4326ToEPSG2180,
  convertWKTToGeoJSON,
} from "../utils/converter.js";

import { getFieldData } from "../api/getFieldData.js";

import { flyToFieldBounds } from "../services/flyToFieldBounds.js";
import { renderFieldOnMap } from "../services/renderFieldOnMap.js";
import { setMapSearchFormValue } from "../services/setMapSearchFormValue.js";

export async function handleMapClick(e) {
  const epsg4326Coord = [e.latlng.lng, e.latlng.lat];
  const epsg2180Coord = convertEPSG4326ToEPSG2180(epsg4326Coord);

  const { fieldId, fieldGeometry, fieldData } = await getFieldData({
    coord: epsg2180Coord,
  });

  const fieldPolygon = convertWKTToGeoJSON(fieldGeometry);

  flyToFieldBounds(fieldPolygon);
  renderFieldOnMap(fieldPolygon);
  setMapSearchFormValue(fieldData);
}
