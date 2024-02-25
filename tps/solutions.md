### TP1 - Détermination de la nature d'un nombre

```javascript
const MSG_POSITIF_PAIR = "Le nombre est positif et pair";
const MSG_POSITIF_IMPAIR = "Le nombre est positif et impair";
const MSG_NEGATIF_PAIR = "Le nombre est négatif et pair";
const MSG_NEGATIF_IMPAIR = "Le nombre est négatif et impair";
const MSG_ZERO = "Le nombre est zéro (et il est pair)";

var nombre = parseInt(prompt("Entrez un nombre entier: "));

var positif = nombre > 0;
var negatif = nombre < 0;
var zero = nombre === 0;
var pair = nombre % 2 === 0;
var impair = !pair;

if (zero) {
  console.log(MSG_ZERO);
} else if (positif && pair) {
  console.log(MSG_POSITIF_PAIR);
} else if (positif && impair) {
  console.log(MSG_POSITIF_IMPAIR);
} else if (negatif && pair) {
  console.log(MSG_NEGATIF_PAIR);
} else {
  console.log(MSG_NEGATIF_IMPAIR);
}
```

### TP2 - Résolution d'une équation du second degré

```javascript
const a = parseFloat(prompt("Entrez la valeur de a:"));
const b = parseFloat(prompt("Entrez la valeur de b:"));
const c = parseFloat(prompt("Entrez la valeur de c:"));

if (a === 0) {
  console.log(`a vaut ${a}, donc pas une equation du 2nd degré.`);
} else {
  let delta = b * b - 4 * a * c;

  if (delta > 0) {
    let x1 = (-b - Math.sqrt(delta)) / (2 * a);
    let x2 = (-b + Math.sqrt(delta)) / (2 * a);
    console.log("L'équation a deux solutions: x1 = " + x1 + " et x2 = " + x2);
  } else if (delta === 0) {
    let x = -b / (2 * a);
    console.log("L'équation a une solution double: x = " + x);
  } else {
    console.log("L'équation n'a pas de solution réelle.");
  }
}
```

### TP3 - Affichage du nom du mois

```javascript
const mois = parseInt(prompt("Entrez un numéro de mois (1 à 12): "));

switch (mois) {
  case 1:
    console.log("Janvier");
    break;
  case 2:
    console.log("Février");
    break;
  case 3:
    console.log("Mars");
    break;
  case 4:
    console.log("Avril");
    break;
  case 5:
    console.log("Mai");
    break;
  case 6:
    console.log("Juin");
    break;
  case 7:
    console.log("Juillet");
    break;
  case 8:
    console.log("Août");
    break;
  case 9:
    console.log("Septembre");
    break;
  case 10:
    console.log("Octobre");
    break;
  case 11:
    console.log("Novembre");
    break;
  case 12:
    console.log("Décembre");
    break;
  default:
    console.log("Numéro de mois invalide");
}
```

### TP4 - Opérations mathématiques

```javascript
const nombre1 = parseInt(prompt("Entrez le premier nombre: "));
const nombre2 = parseInt(prompt("Entrez le deuxième nombre: "));

let choix;

choix = prompt(
  `Choisissez une opération:
    1. Addition (+ ou 1)
    2. Soustraction (- ou 2)
    3. Multiplication (x ou 3)
    4. Division (/ ou 4)`
);

let resultat;
switch (choix) {
  case "1":
  case "+":
    resultat = nombre1 + nombre2;
    break;
  case "2":
  case "-":
    resultat = nombre1 - nombre2;
    break;
  case "3":
  case "x":
    resultat = nombre1 * nombre2;
    break;
  case "4":
  case "/":
    resultat = nombre1 / nombre2;
    break;
  default:
    console.log("Opération invalide.");
}

console.log(`${nombre1} ${choix} ${nombre2}} = ${resultat}`);
```

### TP5 - Calcul d'impôt

```javascript
const revenu = parseFloat(prompt("Entrez votre revenu annuel:"));

if (revenu < 20000) {
  console.log("Impôt: " + revenu * 0.05 + "$");
} else if (revenu >= 20000 && revenu <= 50000) {
  console.log("Impôt: " + revenu * 0.1 + "$");
} else {
  console.log("Impôt: " + revenu * 0.2 + "$");
}
```

### TP6 - Conversion de note en lettre

```javascript
const note = parseInt(prompt("Entrez une note sur 100:"));

if (note >= 90) {
  console.log("A");
} else if (note >= 80) {
  console.log("B");
} else if (note >= 70) {
  console.log("C");
} else if (note >= 60) {
  console.log("D");
} else {
  console.log("F");
}
```

### TP7 - Réduction pour achat

```javascript
const montant = parseFloat(prompt("Entrez le montant total des achats:"));

if (montant > 1000) {
  console.log("Montant après réduction: " + montant * 0.9 + "$");
} else {
  console.log("Montant total: " + montant + "$");
}
```
