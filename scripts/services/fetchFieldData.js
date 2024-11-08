export async function fetchFieldData(coord) {
  const res = await fetch(
    `https://uldk.gugik.gov.pl/?request=GetParcelByXY&xy=${coord}&result=geom_wkt,id,voivodeship,county,commune,region,parcel`
  );

  const data = await res.text();

  const fieldData = data.split("|");
  const fieldId = fieldData[1];
  const fieldGeometry = fieldData[0].split(";")[1];

  return { fieldId, fieldGeometry, fieldData };
}
