# TPs

## TP1

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

## TP2

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

## TP3

S'assurer que le code pin soit toujours un nombre composé de 4 chiffres.
