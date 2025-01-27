import { eventBus } from "../../../shared/eventBus.js";
import { getCurrentState } from "../../../shared/state.js";
import { getItemById, updateItem } from "../../../shared/storage.js";
import { renderContentList } from "../contentView.js";

export function handleAnimalItemDelete(e) {
  const animalItemId = e.target.parentElement.dataset.id;

  const { page, id } = getCurrentState();
  const item = getItemById(page, id);

  const animalItemInd = item.animals.findIndex((el) => el.id === animalItemId);
  item.animals.splice(animalItemInd, 1);

  renderContentList(page, item.animals);
  updateItem(page, item);
  eventBus.emit("itemUpdated");
}
