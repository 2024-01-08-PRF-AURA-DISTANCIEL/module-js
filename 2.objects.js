const iphone15 = {
  designation: "IPhone 15 Pro Max",
  description: "IPhone 15 Pro Max Apple USA",
  price: 1700,
  manufacturer: {
    name: "Apple",
    yearOfBirth: 1976,
  },
  getPriceWithTaxe(taxeRate) {
    return this.price * (1 + taxeRate);
  },
};

const iphone13 = {
  designation: "IPhone 13 Pro Max",
  description: "IPhone 13 Pro Max Apple USA",
  price: 1000,
  manufacturer: {
    name: "Apple",
    yearOfBirth: 1976,
  },
  getPriceWithTaxe(taxeRate) {
    return this.price * (1 + taxeRate);
  },
};

// console.log(
//   `
//     Designation : ${iphone15.designation}
//     Description : ${iphone15.description}
//     Prix : ${iphone15.price} €
//     Fabricant : ${iphone15.manufacturer.name}
//     Prix TTC : ${iphone15.getPriceWithTaxe(0.2)} €
//     `
// );

const user = {
  name: "Christian",
  address: {
    street: "Abc",
    city: "Efg",
    suite: "Apt. 645",
    geo: {
      lat: "-37.3644",
      lon: "81.36363",
    },
  },
  company: {
    name: "M2i Formation",
    catchPhrase: "We are the best",
  },
};

// // Sans destructuration
// console.log(
//   `
//     Nom : ${user.name}
//     Ville : ${user.address.city}
//     Entreprise : ${user.company.name}
//     Coordinates : [${user.address.geo.lat}, ${user.address.geo.lon}]
//     `
// );

// // Avec destructuration
// const {
//   name,
//   company: { name: companyName },
//   address: {
//     city,
//     geo: { lat, lon },
//   },
// } = user;

// let name = user.name;
// let companyName = user.company.name;
// let city = user.address.city;
// let lat = user.address.geo.lat;
// let lon = user.address.geo.lon;
// console.log(
//   `
//     Nom : ${name}
//     Ville : ${city}
//     Entreprise : ${companyName}
//     Coordinates : [${lat}, ${lon}]
//     `
// );

function displayUser({
  name,
  company: { name: companyName },
  address: {
    city,
    geo: { lat, lon },
  },
}) {
  console.log(
    `
    Nom : ${name}
    Ville : ${city}
    Entreprise : ${companyName}
    Coordinates : [${lat}, ${lon}]
    `
  );
}

displayUser(user);
