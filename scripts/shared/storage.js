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

export const addItem = (dbName, item) => {
  const db = loadFromLocalStorage(dbName);

  if (db.find((obj) => obj.id === item.id)) {
    return;
  }

  db.push(item);

  saveToLocalStorage(dbName, db);
};

export const deleteItem = async (dbName, id) => {
  const db = loadFromLocalStorage(dbName);

  const objInd = db.findIndex((obj) => obj.id === id);

  const obj = db.splice(objInd, 1)[0];

  saveToLocalStorage(dbName, db);

  return obj.id;
};

export const updateItem = (dbName, item) => {
  const db = loadFromLocalStorage(dbName);

  const objInd = db.findIndex((obj) => obj.id === item.id);
  db[objInd] = item;

  saveToLocalStorage(dbName, db);
};

export const getItemById = (dbName, id) => {
  const db = loadFromLocalStorage(dbName);

  return db.find((obj) => obj.id === id);
};

export const getItems = (dbName) => {
  const db = loadFromLocalStorage(dbName);

  return [...db];
};
