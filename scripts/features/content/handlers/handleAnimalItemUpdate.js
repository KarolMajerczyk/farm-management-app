import { getCurrentState } from "../../../shared/state.js";
import { getItemById, updateItem } from "../../../shared/storage.js";
import { renderContentList } from "../contentView.js";

export function handleAnimalItemUpdate(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  form.reset();

  const animalId = e.target.closest(".card").dataset.id;
  const { page, id } = getCurrentState();

  const item = getItemById(page, id);
  const animalInd = item.animals.findIndex((obj) => obj.id === animalId);

  for (let [key, value] of data.entries()) {
    item.animals[animalInd][key] = value;
  }

  updateItem(page, item);
  renderContentList(page, item.animals);
}
