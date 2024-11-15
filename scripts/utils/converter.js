proj4.defs(
  "EPSG:2180",
  "+proj=tmerc +lat_0=0 +lon_0=19 +k=0.9993 +x_0=500000 +y_0=-5300000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
);

export const convertEPSG2180ToEPSG4326 = (coord) =>
  proj4("EPSG:2180", "EPSG:4326", coord);

export const convertEPSG4326ToEPSG2180 = (coord) =>
  proj4("EPSG:4326", "EPSG:2180", coord);

export const convertWKTToGeoJSON = (wkt) => {
  const geojson = Terraformer.WKT.parse(wkt);

  geojson.coordinates[0] = geojson.coordinates[0].map((coord) =>
    proj4("EPSG:2180", "EPSG:4326", coord)
  );

  return geojson;
};
