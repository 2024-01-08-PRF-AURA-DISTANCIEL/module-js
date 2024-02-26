// 1. Faire une recherche sur le mot clé "break"
// 2. Limiter l'utilisateur à 5 essais
// 3. Au bout de 2 tentatives incorrectes, commencer à afficher le nombre de tentatives restantes
// 4. Au bout de 5 tentatives incorrectes, il faut bloquer l'appareil
// 5. Afficher un message de welcome quand le user entre une valeur correcte
// Il y a une opportunité de bien se servir des constantes pour avoir un code plus maintenable
const codePin = +prompt("Veuillez definir un code Pin : ");

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


while (true) {
  codePinATester = +prompt(
    "Veuillez saisir le code pin pour debloquer l'appareil : "
  );
  if (codePinATester === codePin) {
    alert("Welcome.");
    break;
  }
  alert("Code Pin incorrect, veuillez ressayer.");
}
