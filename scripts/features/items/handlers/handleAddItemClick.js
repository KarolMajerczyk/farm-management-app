export async function handleAddItemClick(e) {
  const el = e.target;
  const type = el.dataset.type;
  let obj;

  if (type === "fields") {
    const id = document.querySelector("#teryt-input").value;
    const data = await getFieldData({ id });

    obj = createFieldItem(data);
    eventBus.emit("newFieldAdded", { id, location: obj.location });
  } else {
    // herds or machines
  }

  addItem(type, obj);
  const items = getItems(type);

  renderItemsList(type, items);

  // const objCard = document.querySelector(`[data-id="${obj.id}"]`);

  // toggleElementActive(objCard, true);
  // toggleElementVisibility(DOM.sidePanel, true);
  // renderOverview(obj, objType);

  // if (objType !== "fields") {
  //   renderContentList(obj, objType);
  // }

  // return;
}
