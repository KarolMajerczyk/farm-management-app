import { addField, removeField } from "./fieldManager.js";
import { renderField } from "./fieldView.js";

// ---------------- //
// EVENTS
// ---------------- //

document.getElementById("side-menu").addEventListener("click", (e) => {
  if (e.target.dataset.page === "todos") {
    handleTodosSectionLoad();
  }
});

document
  .getElementById("datePicker")
  .addEventListener("change", handleDatePickerChange);

document
  .getElementById("todosList")
  .addEventListener("click", handleTodosListClick);

document
  .getElementById("addFieldForm")
  .addEventListener("submit", handleAddTodoFormSubmit);

// ---------------- //
// CONTROLLER
// -----------------//

// jak nacisnę w menu todos
function handleTodosSectionLoad() {}

// jak wybiorę inną datę
function handleDatePickerChange() {}

// jak nacisnę któryś item w todo
function handleTodosListClick() {
  if (e.target.classList.contains("delete-field")) {
    const fieldId = e.target.dataset.id;
    removeField(fieldId);
    e.target.closest("li").remove();
  }

  // if checkbox
}

// jak zrobie submit todo
function handleAddTodoFormSubmit() {
  e.preventDefault();
  const name = e.target.elements.name.value;

  const fieldData = { id: Date.now(), name, budget: { income: 0, expense: 0 } };
  addField(fieldData);
  renderField(fieldData);
}
