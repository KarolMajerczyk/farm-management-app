import { map } from "../map/map.js";

export const renderFieldOnMap = (polygon) => {
  L.geoJSON(polygon).addTo(map);
};
