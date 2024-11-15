export async function fetchFieldData({ id, coord }) {
  let url = "https://uldk.gugik.gov.pl/?request=";

  if (id) {
    url += `GetParcelById&id=${id}`;
  } else if (coord) {
    url += `GetParcelByXY&xy=${coord}`;
  }

  url += "&result=geom_wkt,id,voivodeship,county,commune,region,parcel";

  const res = await fetch(url);
  const data = await res.text();

  return {
    fieldId: data.split("|")[1],
    fieldGeometry: data.split("|")[0].split(";")[1],
    fieldData: data.split("|"),
  };
}
