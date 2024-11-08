export function convertEPSG4326ToEPSG2180(coord) {
  return proj4("EPSG:4326", "EPSG:2180", coord);
}
