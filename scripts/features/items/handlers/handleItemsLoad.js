export function handleItemsLoad() {
  const type = document.querySelector("#items-list").dataset.type;
  const data = getItems(type);
  renderItemsList(type, data);
}
