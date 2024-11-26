import { changeDetailsPanelSection } from "../services/changeDetailsPanelSection.js";

export function handleDetailsPanelMenuClick(e) {
  if (!e.target.classList.contains("nav-item")) {
    return;
  }

  const page = e.target.dataset.page;
  const menuItem = e.target;

  changeDetailsPanelSection(page, null, menuItem);
}
