// Initialize Leaflet map
const map = L.map("map").setView([51.919, 19.134], 7);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

proj4.defs(
  "EPSG:2180",
  "+proj=tmerc +lat_0=0 +lon_0=19 +k=0.9993 +x_0=500000 +y_0=-5300000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
);

// When click,
map.on("click", async (e) => {
  const epsg4326Coord = [e.latlng.lng, e.latlng.lat];
  const epsg2180Coord = convertCoordFromEPSG4326ToEPSG2180(epsg4326Coord);

  const wkt = await fetchWKTGeometry(epsg2180Coord);
  const geojson = convertWKTToGeoJSON(wkt);

  geojson.coordinates[0] = geojson.coordinates[0].map((coord) => {
    return convertCoordFromEPSG2180ToEPSG4326(coord);
  });

  L.geoJSON(geojson).addTo(map);

  // L.polygon(geojson).addTo(map);
  // map.fitBounds(polygon.getBounds());
});

// Converts world geodetic system to poland geodetic system.
function convertCoordFromEPSG4326ToEPSG2180(coord) {
  return proj4("EPSG:4326", "EPSG:2180", coord);
}

// Converts poland geodetic system to world geodetic system.
function convertCoordFromEPSG2180ToEPSG4326(coord) {
  return proj4("EPSG:2180", "EPSG:4326", coord);
}

// Get WKT coordinates
async function fetchWKTGeometry(coord) {
  const res = await fetch(
    `https://uldk.gugik.gov.pl/?request=GetParcelByXY&xy=${coord}&result=teryt,geom_wkt`
  );

  const wkt = await res.text();
  return wkt.split(";")[1];
}

// Convert WKT to GeoJSON
function convertWKTToGeoJSON(wkt) {
  return Terraformer.WKT.parse(wkt);
}
