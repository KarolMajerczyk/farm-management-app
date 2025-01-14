export async function handleMapSearchFormSubmit(e) {
  e.preventDefault();

  if (e.target.id !== "goto-field") {
    return;
  }

  const terytValue = document.querySelector("#teryt-input").value;

  const { location } = await getFieldData({
    id: terytValue,
  });

  handleMapFieldsRender(terytValue, location);
}
