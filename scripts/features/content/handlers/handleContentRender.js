import { getCurrentState } from "../../../shared/state.js";
import { getItemById } from "../../../shared/storage.js";
import { renderContentList, showContentContainer } from "../contentView.js";

export function handleContentRender(mode, e) {
  const { page, id } = getCurrentState();
  const item = getItemById(page, id);

  if (page === "fields") {
    return;
  }

  showContentContainer();

  if (mode === "edit") {
    const animalId = e.target.closest(".card").dataset.id;
    renderContentList(page, item.animals || item.files, true, animalId);
  } else {
    renderContentList(page, item.animals || item.files);
  }
}


