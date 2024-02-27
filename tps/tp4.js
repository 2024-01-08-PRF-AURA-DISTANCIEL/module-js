let nombre;
do {
  nombre = parseFloat(prompt("Entrez un nombre: "));
  if (isNaN(nombre)) {
    alert("Vous devez entrer un nombre valide");
  } else if (nombre <= 0) {
    alert("Le nombre doit être positif");
  }
} while (isNaN(nombre) || nombre <= 0);

let debut;
let fin;

let bornesValides = false;

while (!bornesValides) {
  debut = parseFloat(prompt("Première valeur : "));
  fin = parseFloat(prompt("Dernière valeur : "));

  if (isNaN(debut) || isNaN(fin)) {
    alert("Les valeurs saisies doivent être des nombres");
    continue;
  }

  if (debut <= 0 || fin <= 0) {
    alert("Les valeurs doivent être supérieures à 0");
    continue;
  }

  if (debut === fin) {
    alert("Les valeurs saisies ne peuvent pas être égales");
    continue;
  }

  bornesValides = true;
}

if (debut > fin) {
  [debut, fin] = [fin, debut];
}

console.log(`Table de multiplication de ${nombre}`);

console.log("===================================\n");
for (let i = debut; i <= fin; i++) {
  console.log(`${nombre} x ${i} = ${nombre * i}`);
}

// // Cette boucle peut-être aussi être écrite de la sorte:
// // Boucle principale
// while (debut <= fin) {
//   console.log(`${nombre} x ${debut} = ${nombre * debut}`);
//   debut++;
// }
