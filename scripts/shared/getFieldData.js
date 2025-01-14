export async function getFieldData({ id, coord }) {
  let url = "https://uldk.gugik.gov.pl/?request=";

  if (id) {
    url += `GetParcelByIdOrNr&id=${id}&result=geom_wkt,id,voivodeship,county,commune,region,parcel`;
  } else if (coord) {
    url += `GetParcelByXY&xy=${coord}&result=geom_wkt,id,voivodeship,county,commune,region,parcel`;
  }

  const res = await fetch(url);
  const raw = await res.text();
  const data = raw.split("|");

  return {
    location: data[0].split(";")[1],
    id: data[1],
    voivodeship: data[2],
    county: data[3],
    commune: data[4],
    region: data[5],
    parcel: data[6],
  };
}
