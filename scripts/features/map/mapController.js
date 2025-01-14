import { map } from "./mapModel.js";
import { eventBus } from "../../shared/eventBus.js";

import { handleMapDrag } from "./handlers/handleMapDrag.js";
import { handleMapClick } from "./handlers/handleMapClick.js";
import { handleMapSearchFormSubmit } from "./handlers/handleMapSearchFormSubmit.js";
import { handleMapFieldsRender } from "./handlers/handleMapFieldsRender.js";
import { handleFieldFocus } from "./handlers/handleFieldFocus.js";
import { handleFieldAdd } from "./handlers/handleFieldAdd.js";
import { handleFieldDelete } from "./handlers/handleFieldDelete.js";

export function initMapController() {
  map.on("drag", handleMapDrag);
  map.on("click", (e) => handleMapClick(e));

  document
    .querySelector("#map-search")
    .addEventListener("click", (e) => e.stopPropagation());

  document
    .querySelector("#map-search")
    .addEventListener("submit", (e) => handleMapSearchFormSubmit(e));

  eventBus.on("fieldsListLoaded", (fields) => {
    handleMapFieldsRender(fields);
    handleFieldFocus(fields[0].location);
  });

  eventBus.on("fieldCardClicked", (location) => handleFieldFocus(location));

  eventBus.on("newFieldAdded", ({ id, location }) =>
    handleFieldAdd(id, location)
  );

  eventBus.on("fieldDelete", (id) => handleFieldDelete(id));
}
