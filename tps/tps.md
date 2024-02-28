# TPS

1. Écrire un programme qui crée un tableau de 10 entiers aléatoires entre 1 et 100, puis affiche le plus grand et le plus petit élément.

```js
const tab = [];
for (let i = 0; i < 10; i++) {
  tab.push(Math.floor(Math.random() * 100) + 1);
}

let min = tab[0];
let max = tab[0];
for (let i = 1; i < tab.length; i++) {
  if (tab[i] < min) {
    min = tab[i];
  }
  if (tab[i] > max) {
    max = tab[i];
  }
}
console.log("Tableaux : ", tab);
console.log("Min :", min);
console.log("Max :", max);
```

2. Créer un tableau contenant les lettres de l'alphabet. Ensuite, demander à l'utilisateur un nombre entre 0 et 25 et afficher la lettre correspondante.

```js
const alphabet = [];
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
// for (let i = 0; i < 26; i++) {
//   alphabet.push(String.fromCharCode(97 + i));
// }

let indice = parseInt(prompt("Entrez un nombre entre 0 et 25 :"));
console.log(alphabet[indice]);
```

3. Écrire un programme qui compare 2 tableaux de taille égale et indique s'ils sont identiques (mêmes valeurs aux mêmes indices). Vous pouvez les créer de maière aléatoire avec Math.random

```js
const tab1 = [];
const tab2 = [];

for (let i = 0; i < 5; i++) {
  tab1.push(Math.random());
  tab2.push(Math.random());
}

let identiques = true;
if (tab1.length === tab2.length) {
  for (let i = 0; i < tab1.length; i++) {
    if (tab1[i] !== tab2[i]) {
      identiques = false;
      break;
    }
  }
} else {
  identiques = false;
}
console.log(identiques);
```

4. Créer un tableau de 10 éléments. Calculer et afficher la somme des éléments aux indices pairs et la somme des éléments aux indices impairs.

```js
const tab = [];
for (let i = 0; i < 10; i++) {
  tab.push(Math.random() * 10);
}

let sommePairs = 0;
let sommeImpairs = 0;
for (let i = 0; i < tab.length; i++) {
  if (i % 2 === 0) {
    sommePairs += tab[i];
  } else {
    sommeImpairs += tab[i];
  }
}

console.log("Somme pairs :", sommePairs);
console.log("Somme impairs :", sommeImpairs);
```

5. Demander à l'utilisateur de saisir une phrase. Créer un tableau contenant chaque mot de la phrase, puis inverser l'ordre des mots dans le tableau et afficher la nouvelle phrase.

```js
const mots = prompt("Entrez une phrase :").split(" ");
const phraseInverse = [];

for (let i = mots.length - 1; i >= 0; i--) {
  phraseInverse.push(mots[i]);
}

console.log(phraseInverse.join(" "));
```

6. Créer deux tableaux de taille aléatoire et fusionner leurs valeurs dans l'ordre alterné dans un nouveau tableau. Par exemple : [1, 2, 3] et [a, b, c] devient [1, a, 2, b, 3, c].

```js
const taille1 = Math.floor(Math.random() * 5) + 1;
const taille2 = Math.floor(Math.random() * 5) + 1;

const tab1 = [];
const tab2 = [];

for (let i = 0; i < taille1; i++) {
  tab1.push(i + 1);
}

for (let i = 0; i < taille2; i++) {
  tab2.push(String.fromCharCode(97 + i));
}

let tabFusion = [];
for (let i = 0; i < taille1 || i < taille2; i++) {
  if (i < taille1) {
    tabFusion.push(tab1[i]);
  }
  if (i < taille2) {
    tabFusion.push(tab2[i]);
  }
}
console.log("Tableau 1: ", tab1);
console.log("Tableau 2: ", tab2);
console.log("Résultat : ", tabFusion);
```

7. Écrire un programme pour trouver le produit des éléments positifs d'un tableau (ignorer les valeurs négatives et zéro).

```js
function produitDesElementsPositifs(arr) {
  const elementsPositifs = arr.filter((element) => element > 0);

  if (elementsPositifs.length === 0) {
    return 0;
  }

  const produit = elementsPositifs.reduce((acc, val) => acc * val, 1);

  return produit;
}

console.log(produitDesElementsPositifs([1, -2, 3, 4, -5, 0, 6])); // Devrait afficher 72 (1 * 3 * 4 * 6)
console.log(produitDesElementsPositifs([-1, -2, -3, 0])); // Devrait afficher 0 car aucun élément positif
console.log(produitDesElementsPositifs([2, 5])); // Devrait afficher 10 (2 * 5)
```

8. On vous donne un tableau d’entiers et un entier k qui représente le nombre de rotations que doit subir le tableau.

Afficher le nouveau tableau après la rotation à droite.

Exigences
Doit retourner un nouveau tableau

Exemple #1
Tableau [1, 2, 3, 4, 5]
Rotations : 3
Resultat : [3,4,5,1,2]

Exemple #2
Tableau [1, 2, 3, 4]
Rotations : 1
Resultat [ 4,1,2,3 ]

- Proposer une solution avec pop() ou shift()
- Une solution sans pop() ou shift()

```js
function rotateArray(array, n) {
  const newArr = [...array];

  for (let i = 1; i <= n; i++) {
    const lastElement = newArr.pop();
    newArr.unshift(lastElement);
  }
  return newArr;
}
```

```js
function rotate(arr, k) {
  const n = arr.length;
  const temp = [...arr];

  for (let i = 0; i < n; i++) {
    arr[(i + k) % n] = temp[i];
  }

  return arr;
}
```
