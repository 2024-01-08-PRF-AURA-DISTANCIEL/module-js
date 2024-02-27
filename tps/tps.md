# TPs
# ===

**TP1**

1. S'assurer que le user ne puisse entrer que des nombres valides. Sinon, il devra ressayer
2. S'assurer que le premier multiplicateur soit toujours inférieur au dernier multiplicateur

```js
const nombre = +prompt("Entrez un nombre : ");

let premierMultiplicateur = +prompt("Premier multiplicateur : ");
let dernierMultiplicateur = +prompt("Dernier multiplicateur : ");

if (premierMultiplicateur > dernierMultiplicateur) {
  const temp = premierMultiplicateur;
  premierMultiplicateur = dernierMultiplicateur;
  dernierMultiplicateur = temp;
}
for (let i = premierMultiplicateur; i <= dernierMultiplicateur; i++) {
  console.log(`${nombre} x ${i} = ${nombre * i}`);
}
```

**TP2**

1. Faire une recherche sur le mot clé "break"
2. Limiter l'utilisateur à 5 essais
3. Au bout de 2 tentatives incorrectes, commencer à afficher le nombre de tentatives restantes
4. Au bout de 5 tentatives incorrectes, il faut bloquer l'appareil
5. Afficher un message de welcome quand le user entre une valeur correcte

Il y a une opportunité de bien se servir des constantes pour avoir un code plus maintenable
const codePin = +prompt("Veuillez definir un code Pin : ");

```javascript
let codePinATester = 0;

// Tant que
while (codePinATester !== codePin) {
  codePinATester = +prompt(
    "Veuillez saisir le code pin pour debloquer l'appareil : "
  );
  if (codePinATester !== codePin) {
    alert("Code Pin incorrect, veuillez ressayer.");
  }
}
```

**TP3**

S'assurer que le code pin soit toujours un nombre composé de 4 chiffres.

**TP 4**

**Objectif:** Écrire un programme JavaScript qui demande à l'utilisateur d'entrer un nombre positif, puis une paire de valeurs définissant un intervalle. Le programme affichera ensuite la table de multiplication de ce nombre pour chaque entier compris dans l'intervalle spécifié, y compris les bornes.

**Instructions:**

1. **Saisie du nombre:**

   - Le programme doit commencer par demander à l'utilisateur d'entrer un nombre.
   - Si l'utilisateur entre une valeur qui n'est pas un nombre ou un nombre négatif ou zéro, affichez un message d'erreur et redemandez-lui de saisir une valeur jusqu'à ce qu'il entre un nombre positif valide.

2. **Définition de l'intervalle:**

   - Ensuite, demandez à l'utilisateur d'entrer deux nombres qui définiront les bornes de l'intervalle pour lequel la table de multiplication sera affichée. Ces deux nombres représentent le début et la fin de l'intervalle.
   - Si l'utilisateur saisit des valeurs non numériques, des nombres négatifs, zéro, ou deux nombres égaux, affichez un message d'erreur approprié et redemandez-lui de saisir les deux bornes.
   - Si la première borne est supérieure à la deuxième, inversez-les.

3. **Affichage de la table de multiplication:**
   - Après avoir validé toutes les entrées, affichez la table de multiplication du nombre saisi pour chaque entier compris dans l'intervalle, y compris les bornes.
   - Chaque ligne de la table de multiplication doit être formatée comme suit: `{nombre} x {i} = {résultat}`, où `{nombre}` est le nombre pour lequel la table est calculée, `{i}` est l'entier courant de l'intervalle, et `{résultat}` est le produit de `{nombre}` par `{i}`.

**Exemple de sortie:**

Si l'utilisateur entre `5` pour le nombre, `2` pour la première valeur de l'intervalle, et `4` pour la dernière valeur, le programme affichera:

```
Table de multiplication de 5
===================================

5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
```

**Consignes supplémentaires:**

- Utilisez `prompt()` pour lire les entrées de l'utilisateur et `alert()` pour afficher les messages d'erreur.
- Utilisez `console.log()` pour afficher la table de multiplication.
- Assurez-vous de traiter correctement les entrées invalides pour améliorer l'expérience utilisateur.

**TP5**

**Suite de Fibonacci:** Écrire un programme qui affiche les 10 premiers nombres de la suite de Fibonacci. La suite de Fibonacci est une séquence de nombres où chaque nombre est la somme des deux précédents, débutant par 0 et 1.

**Explication:** `0, 1, 1, 2, 3, 5, 8, 13, 21, 34`

**TP6**

**Somme des chiffres d'un nombre:** Écrire un programme qui calcule la somme des chiffres d'un nombre donné. Par exemple, si le nombre est 234, le programme doit afficher 9 (2+3+4).

**TP7**

**Inverser un nombre:** Écrire un programme qui inverse les chiffres d'un nombre donné. Si le nombre est 1234, le programme doit afficher 4321.

**TP8**

**Triangle d'étoiles:** Afficher un triangle d'étoiles de hauteur n. Pour n=5, le triangle devrait ressembler à ceci :

```
*
**
***
****
*****
```

**TP9**

**Nombres parfaits:** Afficher les nombres parfaits entre 1 et 1000.Un nombre parfait est un nombre pour lequel la somme de tous ses diviseurs propres (excluant le nombre lui-même) est égale au nombre.

**Explication:** 6 est un nombre parfait parce que 1 + 2 + 3 = 6.
