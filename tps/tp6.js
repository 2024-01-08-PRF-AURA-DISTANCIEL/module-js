// Méthode 1
// let value = prompt("Veuillez entrer un nombre"),
//   sum = 0;
// let number = +value;

// if (!isNaN(number)) {
//   while (number) {
//     sum += number % 10;
//     number = Math.floor(number / 10);
//   }

//   alert(`La somme des chiffre qui composant ${value} est ${sum}`);
// } else {
//   alert(`${number} n'est pas un nombre valide.`);
// }

// Méthode 2
let value = prompt("Veuillez entrer un nombre"),
  sum = 0;
let number = +value;

if (!isNaN(number)) {
  for (const n of value) {
    sum += +n;
  }

  alert(`La somme des chiffre qui composant ${value} est ${sum}`);
} else {
  alert(`${number} n'est pas un nombre valide.`);
}
