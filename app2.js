// 1. S'assurer que le user ne puisse entrer que des nombres valides. Sinon, il devra ressayer
// 2. S'assurer que le premier multiplicateur soit toujours inférieur au dernier multiplicateur

const nombre = +prompt("Entrez un nombre : ");

let premierMultiplicateur = +prompt("Premier multiplicateur : ");
let dernierMultiplicateur = +prompt("Dernier multiplicateur : ");

if (premierMultiplicateur > dernierMultiplicateur) {
  const temp = premierMultiplicateur;
  premierMultiplicateur = dernierMultiplicateur;
  dernierMultiplicateur = temp;
}
for (let i = premierMultiplicateur; i <= dernierMultiplicateur; i++) {
  console.log(`${nombre} x ${i} = ${nombre * i}`);
}
