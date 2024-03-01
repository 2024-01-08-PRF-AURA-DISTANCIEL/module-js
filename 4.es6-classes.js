class Product {
  constructor(designation, description, price, manufacturer) {
    this._designation = designation;
    this._description = description;
    this._price = price;
    this._manufacturer = manufacturer;
  }

  _getPriceWithTaxe(taxRate) {
    return this.price * (1 + taxeRate);
  }
}

const iphone15ProMax = new Product(
  "Iphone 15 Pro Max",
  "Mon Iphone",
  1800,
  "Apple"
);

const chemise = new Product("Ma chemise", "Ma chemise...", 10, "Versace");
const ps5 = new Product("Playstation 5", "Console de jeu", 400, "Sony");
