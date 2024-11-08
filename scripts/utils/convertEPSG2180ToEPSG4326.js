function convertEPSG2180ToEPSG4326(coord) {
  return proj4("EPSG:2180", "EPSG:4326", coord);
}
