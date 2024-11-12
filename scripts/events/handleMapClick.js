import { fieldsDB } from "../db/fieldsDB.js";
import { fetchFieldData } from "../api/fetchFieldData.js";
import { converter } from "../utils/converter.js";
import { mapbox } from "../map/map.js";

import { createField } from "../models/fieldFactory.js";
import { renderFieldsList } from "../services/renderFieldsList.js";

export async function handleMapClick(e) {
  const epsg4326Coord = [e.latlng.lng, e.latlng.lat];
  const epsg2180Coord = converter.EPSG4326ToEPSG2180(epsg4326Coord);

  const { fieldId, fieldGeometry, fieldData } = await fetchFieldData(
    epsg2180Coord
  );

  const fieldGeoJSON = converter.WKTToGeoJSON(fieldGeometry);
  mapbox.flyToFieldBounds(fieldGeoJSON);

  if (fieldsDB.getFieldById(fieldId)) {
    return;
  }

  const field = createField(fieldId, fieldGeoJSON, fieldData);
  mapbox.renderFieldOnMap(field.geojson);

  fieldsDB.addField(field);
  renderFieldsList();
}
