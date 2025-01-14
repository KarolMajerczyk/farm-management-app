export function handleItemCardState(id) {
  const field = getItemById("fields", id);

  if (field) {
    const fieldCard = document.querySelector(`[data-id="${field.id}"]`);
    // toggleElementVisibility(DOM.sidePanel, true);

    // toggleElementActive(fieldCard, true);
    // toggleElementVisibility(DOM.addFieldButton, false);
  }
}
