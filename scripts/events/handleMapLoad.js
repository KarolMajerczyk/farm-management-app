import { getFields } from "../api/getFields.js";
import {
  renderFieldOnMap,
  resetActiveLayer,
} from "../services/renderFieldOnMap.js";

import { renderFieldsList } from "../services/renderFieldsList.js";

export async function handleMapLoad() {
  const fields = await getFields();

  fields.forEach((field) => {
    renderFieldOnMap(field.location);
  });

  resetActiveLayer();
  renderFieldsList(fields);
}
