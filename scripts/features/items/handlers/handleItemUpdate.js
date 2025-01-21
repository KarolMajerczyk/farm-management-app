import { getCurrentState } from "../../../shared/state.js";
import { getItems } from "../../../shared/storage.js";
import { toggleElementActive } from "../../../utils/toggleElementActive.js";
import { renderItemsList } from "../itemsView.js";

export function handleItemUpdate(obj) {
  const page = getCurrentState().page;

  const data = getItems(page);
  renderItemsList(page, data);

  const el = document.querySelector(`.card[data-id="${obj.id}"]`);
  toggleElementActive(el);
}
