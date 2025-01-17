export function loadFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

export function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}

export function clearLocalStorage() {
  localStorage.clear();
}
