import { eventBus } from "../../../shared/eventBus.js";
import { getCurrentState } from "../../../shared/state.js";
import { getItemById, updateItem } from "../../../shared/storage.js";

export function handleOverviewSectionUpdate(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  form.reset();

  const { page, id } = getCurrentState();
  const item = getItemById(page, id);

  for (let [key, value] of data.entries()) {
    item[key] = value;
  }

  updateItem(page, item);
  eventBus.emit("itemUpdated");
}
