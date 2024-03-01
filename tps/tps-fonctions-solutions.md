### TP1 - Compter et localiser un nombre dans un tableau 2D

```javascript
function trouverNombreEtPositions(tableau2D, nombre) {
  let compteur = 0;
  let positions = [];
  for (let i = 0; i < tableau2D.length; i++) {
    for (let j = 0; j < tableau2D[i].length; j++) {
      if (tableau2D[i][j] === nombre) {
        compteur++;
        positions.push(`(${i},${j})`);
      }
    }
  }
  return `${nombre} se retrouve ${compteur} fois dans les emplacements suivants : ${positions.join(
    ","
  )}`;
}
```

### TP2 - Alternance de Majuscules et Minuscules

```javascript
//v1
function alternerMajMinSansMap(tableau) {
  let resultat = [];
  for (let i = 0; i < tableau.length; i++) {
    if (i % 2 === 0) {
      resultat.push(tableau[i].toLowerCase());
    } else {
      resultat.push(tableau[i].toUpperCase());
    }
  }
  return resultat;
}
```

```javascript
// V2
function alternerMajMin(tableau) {
  return tableau.map((car, index) =>
    index % 2 === 0 ? car.toLowerCase() : car.toUpperCase()
  );
}
```

### TP3 - Recherche de caractères identiques consécutifs

```javascript
function caractereIdentiqueConsecutif(chaine) {
  for (let i = 0; i < chaine.length - 1; i++) {
    if (chaine[i] === chaine[i + 1]) {
      return true;
    }
  }
  return false;
}
```

### TP4 - Vérification de préfixe

```javascript
// bann bin
function isPrefixSansStartsWith(chaine, prefixe) {
  for (let i = 0; i < prefixe.length; i++) {
    if (chaine[i] !== prefixe[i]) {
      return false;
    }
  }
  return true;
}
```

```javascript
// v2
function isPrefix(chaine, prefixe) {
  return chaine.startsWith(prefixe);
}
```

### TP5 - Vérifier les multiples pairs

```javascript
function multiplesPairsSansEvery(tableau, k) {
  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] % k !== 0 || tableau[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
}
```

```javascript
// v2
function multiplesPairs(tableau, k) {
  return tableau.every((n) => n % k === 0 && n % 2 === 0);
}
```

### TP6 - Division de chaîne par segments de K caractères

```javascript
function diviserChaine(chaine, k) {
  let segments = [];
  for (let i = 0; i < chaine.length; i += k) {
    segments.push(chaine.substring(i, i + k));
  }
  return segments;
}
```
