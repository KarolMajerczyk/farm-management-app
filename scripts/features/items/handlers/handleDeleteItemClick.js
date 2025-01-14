export function handleDeleteItemClick(e) {
  const objType = e.target.parentElement.dataset.type;
  const objId = e.target.parentElement.dataset.id;

  const id = deleteItem(objType, objId);

  if (objType === "fields") {
    removeFieldFromMap(getMapLayer(id));
    removeMapLayer(id);
  }

  const objArr = getItems(objType);

  renderCardsList(objArr, objType);
  toggleElementVisibility(DOM.sidePanel, false);

  return;
}
