const matrice = [
  [10, 11, 12], //0
  [2, 3, 4], //1
  [7, 8, 9], //2
];
// n = 3
// n^2 = 9

// n = 16
// n^2 = 256

// Version O(n^2)
let somme = 0;
for (let i = 0; i < matrice.length; i++) {
  for (let j = 0; j < matrice.length; j++) {
    // console.log(matrice[i][j]);
    if (i === j) {
      somme += matrice[i][j];
    }
  }
}

console.log(`Somme : ${somme}`);

// O(n)
for (let i = 0; i < matrice.length; i++) {
  somme += matrice[i][i];
}
