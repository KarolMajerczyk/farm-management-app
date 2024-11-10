import { fieldsList } from "../data/fieldsManager.js";
import { flyToFieldBounds } from "../map/flyToFieldBounds.js";

export function handleFieldItemClick(e) {
  e.stopPropagation();

  if (!e.target.classList.contains("field")) {
    return;
  }

  const field = fieldsList.findFieldById(e.target.id);

  flyToFieldBounds(field.geojson);
}
