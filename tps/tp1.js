let nombre;
do {
  nombre = +prompt("Entrez un nombre : ");
  if (isNaN(nombre)) {
    alert("Erreur : Vous devez entrer un nombre valide.");
  }
} while (isNaN(nombre));

let premierMultiplicateur;
do {
  premierMultiplicateur = +prompt("Premier multiplicateur : ");
  if (isNaN(premierMultiplicateur)) {
    alert("Erreur : Le premier multiplicateur doit être un nombre.");
  }
} while (isNaN(premierMultiplicateur));

let dernierMultiplicateur;
do {
  dernierMultiplicateur = +prompt("Dernier multiplicateur : ");
  if (isNaN(dernierMultiplicateur)) {
    alert("Erreur : Le dernier multiplicateur doit être un nombre.");
  }
} while (isNaN(dernierMultiplicateur));

if (premierMultiplicateur > dernierMultiplicateur) {
  let temp = premierMultiplicateur;
  premierMultiplicateur = dernierMultiplicateur;
  dernierMultiplicateur = temp;
}

for (let i = premierMultiplicateur; i <= dernierMultiplicateur; i++) {
  console.log(`${nombre} x ${i} = ${nombre * i}`);
}
