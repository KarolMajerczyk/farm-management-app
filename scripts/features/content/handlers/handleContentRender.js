import { getCurrentState } from "../../../shared/state.js";
import { getItemById } from "../../../shared/storage.js";
import { renderContentList, showContentContainer } from "../contentView.js";

export function handleContentRender() {
  const { page, id } = getCurrentState();
  const item = getItemById(page, id);

  if (page === "fields") {
    return;
  }

  showContentContainer();
  renderContentList(page, item.animals || item.files);
}
