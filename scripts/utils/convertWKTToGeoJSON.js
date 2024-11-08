export function convertWKTToGeoJSON(wkt) {
  const geojson = Terraformer.WKT.parse(wkt);

  geojson.coordinates[0] = geojson.coordinates[0].map((coord) => {
    return proj4("EPSG:2180", "EPSG:4326", coord);
  });

  return geojson;
}
