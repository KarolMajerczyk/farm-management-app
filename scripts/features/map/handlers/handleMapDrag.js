import { map, bounds } from "../mapModel.js";

export function handleMapDrag() {
  map.panInsideBounds(bounds, { animate: false });
}
