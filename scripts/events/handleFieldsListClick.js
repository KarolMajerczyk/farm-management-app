import { fieldsDB } from "../db/fieldsDB.js";
import { mapbox } from "../map/map.js";

export function handleFieldItemClick(e) {
  e.stopPropagation();

  if (!e.target.classList.contains("field")) {
    return;
  }

  const field = fieldsDB.getFieldById(e.target.id);

  mapbox.flyToFieldBounds(field.geojson);
}
