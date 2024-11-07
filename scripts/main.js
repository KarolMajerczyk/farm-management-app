proj4.defs(
  "EPSG:2180",
  "+proj=tmerc +lat_0=0 +lon_0=19 +k=0.9993 +x_0=500000 +y_0=-5300000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
);

// Initialize Leaflet map
const map = L.map("map").setView([51.919, 19.134], 7);

const bounds = [
  [49.0, 14.0],
  [55.0, 24.0],
];

function initializeMap() {
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    minZoom: 7,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  map.setMaxBounds(bounds);
}

initializeMap();

map.on("drag", () => map.panInsideBounds(bounds, { animate: false }));

const fieldsList = [];

map.on("click", async (e) => {
  const epsg4326Coord = [e.latlng.lng, e.latlng.lat];
  const epsg2180Coord = convertEPSG4326ToEPSG2180(epsg4326Coord);

  const field = await fetchFieldData(epsg2180Coord);

  if (fieldsList.find((obj) => obj.id === field.id)) {
    flyToFieldBounds(field);
    return;
  }

  L.geoJSON(field.geometry).addTo(map);

  flyToFieldBounds(field);
  fieldsList.push(field);
  renderFieldsList();
});

function convertToLeafletGeometryCoords(wkt) {
  const geojson = convertWKTToGeoJSON(wkt);

  geojson.coordinates[0] = geojson.coordinates[0].map((coord) => {
    return convertEPSG2180ToEPSG4326(coord);
  });

  return geojson;
}

// Converts world geodetic system to poland geodetic system.
function convertEPSG4326ToEPSG2180(coord) {
  return proj4("EPSG:4326", "EPSG:2180", coord);
}

// Converts poland geodetic system to world geodetic system.
function convertEPSG2180ToEPSG4326(coord) {
  return proj4("EPSG:2180", "EPSG:4326", coord);
}

// Get WKT coordinates
async function fetchFieldData(coord) {
  const res = await fetch(
    `https://uldk.gugik.gov.pl/?request=GetParcelByXY&xy=${coord}&result=geom_wkt,id,voivodeship,county,commune,region,parcel`
  );

  const data = await res.text();
  const field = createFieldObject(data.split("|"));

  return field;
}

function createFieldObject(data) {
  return {
    id: data[1],
    geometry: convertToLeafletGeometryCoords(data[0].split(";")[1]),
    voivodeship: data[2],
    county: data[3],
    commune: data[4],
    region: data[5],
    parcel: data[6].replace("\n", ""),
  };
}

// Convert WKT to GeoJSON
function convertWKTToGeoJSON(wkt) {
  return Terraformer.WKT.parse(wkt);
}

//

//

//

function renderFieldsList() {
  const fieldsDiv = document.querySelector(".fields");
  let html = "";

  fieldsList.forEach((field) => {
    html += `<div id=${field.id} class="field"><p>${field.id}</p></div>`;
  });

  fieldsDiv.innerHTML = html;
}

document.querySelector(".fields").addEventListener("click", (e) => {
  e.stopPropagation();

  if (!e.target.classList.contains("field")) {
    return;
  }

  const field = fieldsList.find((field) => field.id === e.target.id);

  flyToFieldBounds(field);
});

function flyToFieldBounds({ geometry }) {
  const fieldLayer = L.geoJSON(geometry);

  map.flyToBounds(fieldLayer.getBounds(), {
    duration: 2,
  });
}
