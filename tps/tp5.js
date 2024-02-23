let a = parseFloat(prompt("Entrez la valeur de a : "));
let b = parseFloat(prompt("Entrez la valeur de b : "));
let c = parseFloat(prompt("Entrez la valeur de c : "));
let x = parseFloat(prompt("Entrez la valeur de b : "));

console.log(
  ((a + b) / 2) * Math.pow(x, 3) +
    Math.pow(a + b, 2) * Math.pow(x, 2) +
    a +
    b +
    c
);
