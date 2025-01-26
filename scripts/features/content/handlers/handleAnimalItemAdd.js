import { getCurrentState } from "../../../shared/state.js";
import { getItemById, updateItem } from "../../../shared/storage.js";
import { createAnimalItem } from "../contentModel.js";
import { renderContentList } from "../contentView.js";

export function handleAnimalItemAdd() {
  const { page, id } = getCurrentState();

  const item = getItemById(page, id);

  const animal = createAnimalItem();
  item.animals.push(animal);

  updateItem(page, item);
  renderContentList(page, item.animals);
}
