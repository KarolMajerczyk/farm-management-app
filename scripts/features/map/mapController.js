import { map } from "./mapModel.js";
import { eventBus } from "../../shared/eventBus.js";

import { handleMapDrag } from "./handlers/handleMapDrag.js";

export function initMapController() {
  map.on("drag", handleMapDrag);
  map.on("click", (e) => handleMapClick(e));

  document
    .querySelector(".map-search")
    .addEventListener("click", (e) => handleMapSearchFormSubmit(e));

  eventBus.on("fieldsListLoaded", (fields) => {
    handleMapLoad(fields);
  });

  eventBus.on("fieldCardClicked", (location) => handleFieldFocus(location));

  eventBus.on("newFieldAdded", ({ id, location }) =>
    handleFieldAdd(id, location)
  );
}
