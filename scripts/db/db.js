import { loadFromLocalStorage, saveToLocalStorage } from "../shared/storage.js";

function loadDbFromLocalStorage(dbName) {
  return JSON.parse(localStorage.getItem(dbName)) || [];
}

function saveDbToLocalStorage(dbName, db) {
  localStorage.setItem(dbName, JSON.stringify(db));
}

export const addItem = async (dbName, item) => {
  const db = loadDbFromLocalStorage(dbName);

  if (db.find((obj) => obj.id === item.id)) {
    return;
  }

  db.push(item);

  saveDbToLocalStorage(dbName, db);
};

// export const addItem = async ({ dbName, dbArr, item }) => {
//   const db = databases[dbName];

//   if (dbArr) {
//     db[dbArr].push(item);
//     return;
//   }

//   if (db.find((obj) => obj.id === item.id)) {
//     return;
//   }

//   db.push(item);
// };

export const deleteItem = async (dbName, id) => {
  const db = loadDbFromLocalStorage(dbName);

  const objInd = db.findIndex((obj) => obj.id === id);

  const obj = db.splice(objInd, 1)[0];

  saveDbToLocalStorage(dbName, db);

  return obj.id;
};

export const editField = async (dbName, id, item) => {
  const db = loadDbFromLocalStorage(dbName);

  const objInd = db.findIndex((obj) => obj.id === id);
  db[objInd] = item;

  saveDbToLocalStorage(dbName, db);
};

export const getItemById = async (dbName, id) => {
  const db = loadDbFromLocalStorage(dbName);

  return db.find((obj) => obj.id === id);
};

export const getItems = async (dbName) => {
  const db = loadFromLocalStorage(dbName);

  return [...db];
};

export async function getFieldData({ id, coord }) {
  let url = "https://uldk.gugik.gov.pl/?request=";

  if (id) {
    url += `GetParcelByIdOrNr&id=${id}&result=geom_wkt,id,voivodeship,county,commune,region,parcel`;
  } else if (coord) {
    url += `GetParcelByXY&xy=${coord}&result=geom_wkt,id,voivodeship,county,commune,region,parcel`;
  }

  const res = await fetch(url);
  const data = await res.text();

  return {
    fieldId: data.split("|")[1],
    fieldGeometry: data.split("|")[0].split(";")[1],
    fieldData: data.split("|"),
  };
}

// https://uldk.gugik.gov.pl/?request=GetParcelByIdOrNr&id=141201_1.0001.6509&result=numer,powiat
// https://uldk.gugik.gov.pl/?request=GetParcelByIdOrNr&id=120709_2.0007.4710&result=id,numer,powiat,geom_wkt
