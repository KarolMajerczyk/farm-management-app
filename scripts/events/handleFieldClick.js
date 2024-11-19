import { getFieldById } from "../db/fieldsDB.js";
import { flyToFieldBounds } from "../services/flyToFieldBounds.js";

export async function handleFieldClick(e) {
  e.stopPropagation();

  if (!e.target.classList.contains("field")) {
    return;
  }

  const field = await getFieldById(e.target.id);

  flyToFieldBounds(field.polygon);
}
