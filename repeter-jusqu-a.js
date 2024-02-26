const codePin = +prompt("Veuillez definir un code Pin : "); // 1234

let codePinATester;

// Tant que : Quand la condition est "false" on entre pas dans la boucle
while (codePinATester !== codePin) {
  //1234!==1234
  codePinATester = +prompt(
    "Veuillez saisir le code pin pour debloquer l'appareil : "
  );
  if (codePinATester === codePin) {
    alert("Welcome.");
    break;
  }
  alert("Code Pin incorrect, veuillez ressayer.");
}

//  Repeter jusqu'à : Meme si la condition est "false",  la boucle s'execute toujour eu moins une fois, car la condition est testee a la fin
do {
  codePinATester = +prompt(
    "Veuillez saisir le code pin pour debloquer l'appareil : "
  );
  if (codePinATester === codePin) {
    alert("Welcome.");
    break;
  }
  alert("Code Pin incorrect, veuillez ressayer.");
} while (codePinATester !== codePin);
