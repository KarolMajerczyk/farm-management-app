export async function handleMapClick(e) {
  const epsg4326Coord = [e.latlng.lng, e.latlng.lat];
  const epsg2180Coord = convertEPSG4326ToEPSG2180(epsg4326Coord);

  const { id, location } = await getFieldData({
    coord: epsg2180Coord,
  });

  setMapSearchFormValue(id);

  handleMapFieldsRender(id, location);
}
