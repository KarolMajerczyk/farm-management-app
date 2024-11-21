import { getFieldById } from "../api/getFieldById.js";
import { flyToFieldBounds } from "../services/flyToFieldBounds.js";
import { toggleCardTileActive } from "../services/toggleCardTileActive.js";

export async function handleFieldClick(e) {
  e.stopPropagation();

  if (!e.target.classList.contains("field")) {
    return;
  }

  toggleCardTileActive(e.target);

  const field = await getFieldById(e.target.dataset.id);

  flyToFieldBounds(field.location);
}
