import { eventBus } from "../../../shared/eventBus.js";
import { getCurrentState } from "../../../shared/state.js";
import { getItemById, updateItem } from "../../../shared/storage.js";
import { renderContentList } from "../contentView.js";

export function handleFileItemDelete(e) {
  const fileItemId = e.target.closest(".file").dataset.id;

  const { page, id } = getCurrentState();
  const item = getItemById(page, id);

  const fileItemInd = item.files.findIndex((el) => el.id === fileItemId);
  item.files.splice(fileItemInd, 1);

  renderContentList(page, item.files);
  updateItem(page, item);
  eventBus.emit("itemUpdated");
}
