export function saveToLocalStorage(key, data) {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
}

export function loadFromLocalStorage(key) {
  try {
    const jsonData = localStorage.getItem(key);

    return jsonData ? JSON.parse(jsonData) : null;
  } catch (error) {
    console.error("Error loading from localStorage", error);
    return null;
  }
}

export function removeFromLocalStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing from localStorage", error);
  }
}

export function clearLocalStorage() {
  try {
    localStorage.clear();
  } catch (error) {
    console.error("Error clearing localStorage", error);
  }
}
