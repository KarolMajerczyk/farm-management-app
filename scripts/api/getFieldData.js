export async function getFieldData({ id, coord }) {
  let url = "https://uldk.gugik.gov.pl/?request=";

  if (id) {
    url += `GetParcelByIdOrNr&id=${id}&result=id,numer,powiat,geom_wkt`;
  } else if (coord) {
    url += `GetParcelByXY&xy=${coord}&result=geom_wkt,id,voivodeship,county,commune,region,parcel`;
  }

  const res = await fetch(url);
  const data = await res.text();

  return {
    fieldId: data.split("|")[1],
    fieldGeometry: data.split("|")[0].split(";")[1],
    fieldData: data.split("|"),
  };
}

// https://uldk.gugik.gov.pl/?request=GetParcelByIdOrNr&id=141201_1.0001.6509&result=numer,powiat
// https://uldk.gugik.gov.pl/?request=GetParcelByIdOrNr&id=120709_2.0007.4710&result=id,numer,powiat,geom_wkt
