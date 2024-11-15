import { getFieldById } from "../db/fieldsDB.js";
import { flyToFieldBounds } from "../services/flyToFieldBounds.js";

export function handleFieldClick(e) {
  e.stopPropagation();

  if (!e.target.classList.contains("field")) {
    return;
  }

  const field = getFieldById(e.target.id);

  flyToFieldBounds(field.polygon);
}
