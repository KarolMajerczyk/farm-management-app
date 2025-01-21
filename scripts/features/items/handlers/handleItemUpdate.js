import { getCurrentState } from "../../../shared/state.js";
import { getItems } from "../../../shared/storage.js";
import { toggleElementActive } from "../../../utils/toggleElementActive.js";
import { renderItemsList } from "../itemsView.js";

export function handleItemUpdate() {
  const { page, id } = getCurrentState();

  const items = getItems(page);
  renderItemsList(page, items);

  const el = document.querySelector(`.card[data-id="${id}"]`);
  toggleElementActive(el);
}
