# TPs

## TP1

Votre fichier JS doit permettre :
Déclarer 2 variables, implémenter avec des valeurs de type number
Déclarer une constante qui est égal à la somme des 2 variables
Afficher un message d’alerte « Bienvenue sur la page de formulaire »
La console du navigateur affiche le contenu des variables.
La console affiche « Le résultat est » + le résultat du calcul.

```js
const nombre1 = Number(prompt("Nombre 1 : "));
const nombre2 = Number(prompt("Nombre 2 : "));

const somme = nombre1 + nombre2;
alert(`${nombre1} + ${nombre2} = ${somme}`);
```

## TP2

Ecrire un programme Javascript qui demande à l’utilisateur d’entrer à partir du clavier:
La distance parcours(m)
Le temps(sec)

Puis calculer la vitesse selon la formule: vitesse=distance parcourue/temps

Puis afficher le résultat dans le format suivant : 345 m/s(utiliser alert et console.log)

```js
const distance = Number(prompt("Distance : "));
const temps = Number(prompt("Temps"));

const vitesse = distance / temps;
alert(`${vitesse}m/s`);
```

## TP3

Ecrire un programme Javascript qui déclare 3 variables, a,b,c et qui va ensuite effectuer une permutation de ces valeurs :
Exemple :
Entrez la première valeur(a) : 51
Entrez la deuxième valeur(b) : 876
Entrez la troisième valeur(c) : 235
Les valeurs entrées sont : a = 51, b = 876 et c = 235
Permutation: b <== a, c <== b, a <== c
Les valeurs permutées sont : a = 235, b = 51 et c = 876

```js
// Sans complement
let a = parseInt(prompt("Entrez la valeur de a : "));
let b = parseInt(prompt("Entrez la valeur de b : "));
let c = parseInt(prompt("Entrez la valeur de c : "));

console.log(`Avant permutation :
a = ${a}
b = ${b}
c = ${c}
`);
const temp = b;
b = a;
a = c;
c = temp;

console.log(`Après permutation :
a = ${a}
b = ${b}
c = ${c}
`);
```

```js
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
```

## TP4

Ecrivez un programme age.js qui :
demande son âge à l'utilisateur ;
lit la réponse de l'utilisateur et l'enregistre dans une variable age de type entier ;
Effectue le calcul de l'année de naissance de l'utilisateur et l'enregistre dans la variable annee de type entier ;
affiche l'année de naissance ainsi calculée.

Exemple d'exécution du programme(exemple en 2021):
Donnez votre âge : 29
Votre année de naissance est : 1992

```js
// Demande de l'âge à l'utilisateur
let age = prompt("Donnez votre âge : ");

// Conversion de la réponse en un nombre entier
age = parseInt(age);

// Obtention de l'année courante
const anneeCourante = new Date().getFullYear();

// Calcul de l'année de naissance
let annee = anneeCourante - age;

// Affichage de l'année de naissance
console.log(`Votre année de naissance est : ${annee}`);
```

## TP5

Écrivez un petit programme qui vous permettant d'évaluer un polynôme du
3ème degré de la forme:
((a+b)/2)x3 + (a+b)2x2 + a + b + c
Exemple d'exécution:
Entrez a (int) : 1
Entrez b (int) : 2
Entrez c (int) : 3
Entrez x (double) : 3.5
La valeur du polynôme est : 180.5625

Pour les fonctions mathématiques : https://www.w3schools.com/js/js_math.asp

```js
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
```
