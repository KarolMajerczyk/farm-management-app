export function handleItemCardClick(e) {
  const el = e.target;
  const type = el.dataset.type;
  const id = el.dataset.id;

  const obj = getItemById(type, id);

  // toggleElementActive(el, true);

  if (type === "fields") {
    // toggleElementVisibility(DOM.addFieldButton, false);
    eventBus.emit("fieldCardClicked", obj.location);
  } else {
    renderContentList(obj, type);
  }

  // toggleElementVisibility(DOM.sidePanel, true);
  // renderOverview(obj, objType);
}
