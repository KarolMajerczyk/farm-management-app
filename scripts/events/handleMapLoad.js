import { getFields } from "../api/getFields.js";
import {
  renderFieldOnMap,
  resetActiveLayer,
} from "../services/renderFieldOnMap.js";

export async function handleMapLoad() {
  const fields = await getFields();

  fields.forEach((field) => {
    renderFieldOnMap(field.location);
  });

  resetActiveLayer();
}
