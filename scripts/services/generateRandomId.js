export function generateRandomId() {
  return "id-" + Math.random().toString(36).slice(2, 11);
}
