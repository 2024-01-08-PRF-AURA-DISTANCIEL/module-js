function Product(designation, description, price, manufacturer) {
  this.designation = designation;
  this.description = description;
  this.price = price;
  this.manufacturer = manufacturer;
//   this.getPriceWithTaxe = function (taxRate) {
//     return this.price * (1 + taxeRate);
//   };
}

Product.prototype.getPriceWithTaxe = function (taxRate) {
  return this.price * (1 + taxeRate);
};

// const iphone15ProMax = new Product(
//   "Iphone 15 Pro Max",
//   "Mon Iphone",
//   1800,
//   "Apple"
// );

// const chemise = new Product("Ma chemise", "Ma chemise...", 10, "Versace");
// const ps5 = new Product("Playstation 5", "Console de jeu", 400, "Sony");
