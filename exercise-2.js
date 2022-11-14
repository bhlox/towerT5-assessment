// Get the list of unique brands from the array below

const itemList = [
  { brand: "GOODYEAR", design: "ASSURANCE DURAPLUS" },
  { brand: "NEXEN", design: "ROADIAN AT PRO RA8" },
  { brand: "NEXEN", design: "ROADIAN HTX RH5" },
  { brand: "DOUBLESTAR", design: "DH05" },
  { brand: "MAXXIS", design: "MECOTRA ME3" },
  { brand: "GOODYEAR", design: "CARGO MARATHON 2" },
  { brand: "SAILUN", design: "ATREZZO INSPIRE" },
  { brand: "TOYO", design: "PROXES CR1" },
  { brand: "TOYO", design: "OPEN COUNTRY AT 2" },
  { brand: "GOODYEAR", design: "DURAPLUS" },
  { brand: "BRIDGESTONE", design: "DUELER H/T 684" },
  { brand: "CONTINENTAL", design: "COMFORTCONTACT CC6" },
  { brand: "BRIDGESTONE", design: "ECOPIA EP300" },
];

const reduced = itemList.reduce((uniques, item) => {
  if (!uniques.length) {
    uniques.push(item);
    return uniques;
  }
  const shouldPush = uniques.every((item2) => item2.brand !== item.brand);

  if (shouldPush) {
    uniques.push(item);
  }
  return uniques;
}, []);

let uniqueBrands = reduced;
console.log("Unique Brands: ", uniqueBrands);
