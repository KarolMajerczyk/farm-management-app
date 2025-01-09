import { convertEPSG4326ToEPSG2180 } from "../utils/converter.js";

import { getFieldData } from "../db/db.js";

import { setMapSearchFormValue } from "../services/setMapSearchFormValue.js";
import { controlMapRenderPolygons } from "../services/controlMapRenderPolygon.js";

export async function handleMapClick(e) {
  const epsg4326Coord = [e.latlng.lng, e.latlng.lat];
  const epsg2180Coord = convertEPSG4326ToEPSG2180(epsg4326Coord);

  const { fieldId, fieldGeometry } = await getFieldData({
    coord: epsg2180Coord,
  });

  controlMapRenderPolygons(fieldId, fieldGeometry);

  setMapSearchFormValue(fieldId);
}
