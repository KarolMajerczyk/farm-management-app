import { getItems } from "../db/db.js";
import {
  renderFieldOnMap,
  resetActiveLayer,
  saveMapLayer,
} from "../services/renderFieldOnMap.js";

export async function handleMapLoad() {
  const fields = await getItems("fields");

  fields.forEach((field) => {
    const fieldLayer = renderFieldOnMap(field.location);
    saveMapLayer(field.id, fieldLayer);
  });

  resetActiveLayer();
}
