export function createField(id, geojson, data) {
  return {
    id,
    geojson,
    voivodeship: data[2],
    county: data[3],
    commune: data[4],
    region: data[5],
    parcel: data[6].replace("\n", ""),
  };
}
