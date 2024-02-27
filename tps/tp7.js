// Méthode 1
// let value = 1234,
//   reversed = 0;

// while (number) {
//   reversed = reversed * 10 + (number % 10);
//   number = Math.floor(number / 10);
// }
// console.log(reversed);

// Méthode 2
const number = +prompt("Entrez un nombre : ");

let reversedStr = "";

const numberStr = Math.abs(number).toString();

for (const n of numberStr) {
  reversedStr = n + reversedStr;
}

alert(reversedStr);
alert(`
 Nombre entré : ${number}
 Nombre renversé : ${Math.sign(number) * Number(reversedStr)}
`);
