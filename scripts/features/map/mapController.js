import { map } from "./mapModel.js";
import { eventBus } from "../../shared/eventBus.js";

import { handleMapDrag } from "./handlers/handleMapDrag.js";
import { handleMapClick } from "./handlers/handleMapClick.js";
import { handleMapSearchFormSubmit } from "./handlers/handleMapSearchFormSubmit.js";
import { handleFieldLayersRender } from "./handlers/handleFieldLayersRender.js";
import { handleFieldLayerFocus } from "./handlers/handleFieldLayerFocus.js";
import { handleFieldLayerAdd } from "./handlers/handleFieldLayerAdd.js";
import { handleFieldLayerDelete } from "./handlers/handleFieldLayerDelete.js";

export function initMapController() {
  map.on("drag", handleMapDrag);
  map.on("click", (e) => handleMapClick(e));

  handleFieldLayersRender();
  handleFieldLayerFocus();

  document
    .querySelector("#map-search")
    .addEventListener("click", (e) => e.stopPropagation());

  document
    .querySelector("#map-search")
    .addEventListener("submit", (e) => handleMapSearchFormSubmit(e));

  eventBus.on("fieldCardSelected", handleFieldLayerFocus);
  eventBus.on("fieldAdded", handleFieldLayerAdd);
  eventBus.on("fieldDeleted", (id) => handleFieldLayerDelete(id));
}
