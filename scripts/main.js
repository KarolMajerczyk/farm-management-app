import { map } from "./map/map.js";
import { handleMapDrag } from "./events/handleMapDrag.js";
import { handleMapClick } from "./events/handleMapClick.js";
import { handleFieldItemClick } from "./events/handleFieldsListClick.js";

proj4.defs(
  "EPSG:2180",
  "+proj=tmerc +lat_0=0 +lon_0=19 +k=0.9993 +x_0=500000 +y_0=-5300000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
);

window.addEventListener("DOMContentLoaded", () => {
  map.on("drag", handleMapDrag);
  map.on("click", (e) => handleMapClick(e));
});

document
  .querySelector(".fields")
  .addEventListener("click", (e) => handleFieldItemClick(e));
