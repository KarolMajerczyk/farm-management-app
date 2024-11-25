import { getFieldById } from "../api/getFieldById.js";
import { flyToFieldBounds } from "../services/flyToFieldBounds.js";
import { toggleCardTileActive } from "../services/toggleCardTileActive.js";
import { setMapSearchFormValue } from "../services/setMapSearchFormValue.js";

export async function handleFieldCardClick(e) {
  e.stopPropagation();

  if (!e.target.classList.contains("field")) {
    return;
  }

  toggleCardTileActive(e.target);
  setMapSearchFormValue(e.target.dataset.id);

  const field = await getFieldById(e.target.dataset.id);

  flyToFieldBounds(field.location);
}
