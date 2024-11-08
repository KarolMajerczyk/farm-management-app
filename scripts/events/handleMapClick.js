import { convertEPSG4326ToEPSG2180 } from "../utils/convertEPSG4326ToEPSG2180.js";
import { fetchFieldData } from "../services/fetchFieldData.js";
import { findFieldById, addField } from "../data/fieldsListManager.js";
import { flyToFieldBounds } from "../map/flyToFieldBounds.js";
import { convertWKTToGeoJSON } from "../utils/convertWKTToGeoJSON.js";
import { createField } from "../models/FieldFactory.js";
import { renderFieldOnMap } from "../map/renderFieldOnMap.js";
import { renderFieldsList } from "../services/renderFieldsList.js";

export async function handleMapClick(e) {
  const epsg4326Coord = [e.latlng.lng, e.latlng.lat];
  const epsg2180Coord = convertEPSG4326ToEPSG2180(epsg4326Coord);

  const { fieldId, fieldGeometry, fieldData } = await fetchFieldData(
    epsg2180Coord
  );

  const fieldGeoJSON = convertWKTToGeoJSON(fieldGeometry);
  flyToFieldBounds(fieldGeoJSON);

  if (findFieldById(fieldId)) {
    return;
  }

  const field = createField(fieldId, fieldGeoJSON, fieldData);
  renderFieldOnMap(field.geojson);

  addField(field);
  renderFieldsList();
}
