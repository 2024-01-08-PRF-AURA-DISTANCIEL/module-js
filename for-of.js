const fname = "christian"; // 1

// For classique :O(n)
// for (let i = 0; i < fname.length; i++) {
//   console.log(`${fname[i]}`); //n
// }

// O(n)
for (let caractere of fname) {
  console.log(caractere);
}
