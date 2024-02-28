# TPS

**TP 1**

1. Complétez le code suivant pour créer une fonction factory inRange
   qui permet de vérifier si un nombre est compris entre deux bornes :

- **Fonction factory** : C'est la fonction qui va créer toutes les autres fonctions
  Si les fonctions factories sont possibles, c'est grace au "Currying" qu'on a vu ensemble

```js
function makeBetweenFunc(min, max) {
  // Compléter ici
}
```

2. Utilisation, vous pouvez essayer avec des ranges entre `18` et `100`
   `const inRange = makeBetweenFunc(?, ?);` Completer les `? ?`

```js
console.log(inRange(17)); // Doit afficher false
console.log(inRange(68)); // Doit afficher true
```

2. Puis complétez à nouveau le code pour créer une fisNinetiesonction qui vérifie si une année est comprise entre `1900` et `2000` :

```js
// Nouvelle fonction factory
const isNineties = makeBetweenFunc(?, ?);

console.log(isNineties(1995)); // Doit afficher true
```

3. Enfin, complétez une dernière fois le code pour créer une fonction `isNiceWeather` qui vérifie si une température est comprise entre `18` et `23` degrés :

```js
// Dernière fonction factory
const isNiceWeather = makeBetweenFunc(?, ?);

console.log(isNiceWeather(20)); // Doit afficher true
```

4. Expliquer ce que vous avez appris et compris de l'importance du Currying

**TP 2**
Vous devez coder une fonction getPriceWithTaxes(price, taxRate) qui prend un prix et un taux de TVA `(entre 0 et 1)` et retourne le prix final avec les taxes.
Par exemple:
`getPriceWithTaxes(100, 0.2)` doit retourner `120 (100 + 20% de taxes)`
`getPriceWithTaxes(50, 0.1)` doit retourner `55 (50 + 10% de taxes)`
Pour cet exercice, vous devez:

1. Coder la fonction `getPriceWithTaxes` de manière classique
2. Refactorer cette fonction pour utiliser un style `curryfié`
3. Définir des fonctions réutilisables `getVAT`, `getRegionTax`, etc pour les différents taux de taxes
4. Appeler ces fonctions `curryfiées(avec le curryingc:D)` pour calculer des prix avec les taxes

**TP3**
Écrire une méthode Java qui prend en paramètre un tableau 2D, et un nombre.

La méthode devrait nous retourner la valeur correspond au nombre de fois que ce nombre se trouve dans le tableau et ses différentes positions.

Ex :

```js
maMethode({
  {1, 4, 2, 1},
  {6, 3, 8, 9},
  {1, 5, 1, 0}
},1)
> 1 se retrouve 4 fois dans les emplacements suivants : (0,0),(0,3),(2,0),(2,2)
```

=========================================

**TP4**
Écrire une méthode Java qui prend en paramètre un tableau de caractères.

Et qui va ensuite retourner un nouveau tableau avec une alternance entre les lettres en Maj et Min.

Ex :

```js
maMethode(["a", "b", "c", "d", "e"]) > ["a", "B", "c", "D", "e"];
```

**TP5**
Écrire un programme Java demande à l’utilisateur de saisir un texte et qui ensuite, et qui ensuite affiche le nombre d’occurence de chaque lettre.

**TP6: Gestionnaire de Bibliothèque**

Créez une classe Book pour représenter un livre avec les propriétés :

- title (titre)
- author (auteur)
- genre (genre)

Créez une classe Library qui a une collection de livres et définissez des méthodes pour :

- Ajouter un livre à la bibliothèque
- Rechercher un livre par titre
- Rechercher des livres par auteur
- Rechercher des livres par genre
- Emprunter un livre (mettre à jour le statut du livre)

===============================================
**TP7: Gestionnaire de Produits en Ligne**

Créez une classe Product avec les propriétés :

- name (nom)
- price (prix)
- quantity (quantité en stock)

Créez une classe ShoppingCart qui permet d'ajouter des produits, de les retirer et de calculer le total. Définissez des méthodes pour :

- Ajouter un produit au panier
- Retirer un produit du panier
- Calculer le total du panier

Bien sûr, voici une version améliorée de l'exercice avec des méthodes qui pourraient nécessiter l'utilisation de map pour formater les données sans mentionner explicitement l'utilisation de map :

=========================================================================
**TP8 : Gestionnaire de Tâches**

Créez une classe Task pour représenter une tâche avec les propriétés suivantes :

- title (titre de la tâche)
- priority (priorité de la tâche, un entier positif)
- completed (indicateur si la tâche est terminée, true/false)
  Créez une classe TaskList qui contient une liste de tâches. Définissez des méthodes pour :

- Ajouter une tâche à la liste
- Retirer une tâche de la liste
- Afficher la liste des tâches (afficher le titre, la priorité et l'état)
- Afficher les tâches triées par priorité (de la plus haute à la plus basse)
- Afficher les tâches non terminées
- Calculer le nombre total de tâches non terminées
- Marquer une tâche comme terminée
- Formater les titres de tâches en majuscules
- Formater les priorités pour afficher "Haute", "Moyenne" ou "Basse" en fonction de la priorité numérique
- Ajoutez une méthode pour afficher les tâches triées par priorité, mais en regroupant les tâches de même priorité ensemble.
