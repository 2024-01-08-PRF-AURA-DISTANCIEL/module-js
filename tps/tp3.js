// let a = parseInt(prompt("Entrez la valeur de a : "));
// let b = parseInt(prompt("Entrez la valeur de b : "));
// let c = parseInt(prompt("Entrez la valeur de c : "));
// console.log(`Avant permutation :
// a = ${a}
// b = ${b}
// c = ${c}
// `);
// const temp = b;
// b = a;
// a = c;
// c = temp;

// console.log(`Après permutation :
// a = ${a}
// b = ${b}
// c = ${c}
// `);

// Avec complement
let a = parseInt(prompt("Entrez la valeur de a : "));
let b = parseInt(prompt("Entrez la valeur de b : "));
let c = parseInt(prompt("Entrez la valeur de c : "));

console.log(`Avant permutation :
a = ${a}
b = ${b}
c = ${c}
`);

a = a + b + c; // a devient la somme de a, b, et c
b = a - (b + c); // b devient la nouvelle valeur de a
c = a - (b + c); // c devient la nouvelle valeur de a
a = a - (b + c); // a reprend sa valeur initiale

console.log(`Après permutation :
a = ${a}
b = ${b}
c = ${c}
`);
