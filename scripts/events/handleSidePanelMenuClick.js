import { changeSidePanelSection } from "../services/changeSidePanelSection.js";

export function handleSidePanelMenuClick(e) {
  if (!e.target.classList.contains("nav-item")) {
    return;
  }

  const page = e.target.dataset.page;
  const menuItem = e.target;

  changeSidePanelSection(page, null, menuItem);
}
