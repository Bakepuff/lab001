
const aCar = {
    owner: "Joe Bloggs",
    previous_owners: [
      { name: "Pat Smith", address: "1 Main Street" },
      { name: "Sheila Dwyer", address: "2 High Street" }
    ],
    registration : {
        year: 201, county: "WD", number: 1058
    }
};

console.log(
    "Reg. = " +
      aCar.registration.year +
      "-" +
      aCar.registration.county +
      "-" +
      aCar.registration.number
  );
  aCar.milage = 10000
  aCar.color = {
    exterior: "red",
    interior: { texture: "leather", shade: "cream" }
  }
  
  console.log(
    "It is a " +
      aCar.color.exterior +
      " car, " +
      aCar.milage +
      " milage, with " +
      aCar.color.interior.texture +
      " interior."
  );
  console.log(
    "First owner: " +
      aCar.previous_owners[0].name +
      ' - ' +
      aCar.previous_owners[0].address
  )