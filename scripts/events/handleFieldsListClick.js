import { getFieldsList } from "../data/fieldsListManager.js";
import { flyToFieldBounds } from "../map/flyToFieldBounds.js";

export function handleFieldItemClick(e) {
  e.stopPropagation();

  if (!e.target.classList.contains("field")) {
    return;
  }

  const fieldsList = getFieldsList();
  const field = fieldsList.find((field) => field.id === e.target.id);

  flyToFieldBounds(field.geojson);
}
