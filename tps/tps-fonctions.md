## Tps

**TP1**
Écrire une méthode Java qui prend en paramètre un tableau 2D, et un nombre.

La méthode devrait nous retourner la valeur correspond au nombre de fois que ce nombre se trouve dans le tableau et ses différentes positions.

Ex :

```js
maMethode([
  [1, 4, 2, 1],
  [6, 3, 8, 9],
  [1, 5, 1, 0]
],1)
> 1 se retrouve 4 fois dans les emplacements suivants : (0,0),(0,3),(2,0),(2,2)
```



**TP2**
Écrire une fonction Javascript qui prend en paramètre un tableau de caractères.

Et qui va ensuite retourner un nouveau tableau avec une alternance entre les lettres en Maj et Min.

Ex :

```js
maMethode(["a", "b", "c", "d", "e"]) > ["a", "B", "c", "D", "e"];
```

**TP3**
Recherche de caractères identiques dans une rangée
On vous donne une chaîne de caractères d'un seul mot comme argument. Vous retournerez true si elle contient deux caractères identiques dans une rangée,c’est-à-dire qui se suivent, sinon elle retournera false.

Exigences
Doit retourner true ou false
Doit également fonctionner avec les caractères spéciaux
Exemple n° 1
maMethode("terrific")

> true
> Exemple n°2
> maMethode("chats")
> false
> Exemple n°3
> maMethode("chats !!")
> true

**TP4**
Écrire une fonction Javascript qui prend en paramètre 2 string et qui ensuite retourne un booléen(true/false) selon que le 2ème string est le préfixe du premier ou pas.

Ex :

isPrefix("banner", "bang")

> false

isPrefix("hugging", "hug")

> true

**TP5**
On vous donne un tableau d'entiers et un entier K comme arguments. Retourner vrai si chaque entier est un multiple pair de l'entier K.

Exigences
Doit retourner soit true soit false

Exemple #1
votreFonction([2, 4, 6, 8], 2)

> true

Exemple #2
votreFonction([12, 14, 36, 18], 9)

> false

**TP6**
On vous donne une chaîne de caractères et un nombre entier K comme arguments.
Divisez la chaîne de caractères en un tableau de chaînes de caractères, où chaque élément n'a pas plus de K caractères.
Retournez le tableau résultant.
La chaîne en argument sera toujours d'au moins K caractères.

Exigences
Doit retourner un tableau de chaînes de caractères

Exemple #1
votreFonction("aabbbcccd", 3)

> ["aab", "bbc", "ccd"]

Exemple #2
votreFonction("abcdefgh", 5)

> ["abcde","fgh"]
