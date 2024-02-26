const MAX_ESSAIS = 5;
const ALERT_ESSAIS = 2;
let essais = 0;

const codePin = +prompt("Veuillez définir un code PIN : ");
let codePinATester = 0;

while (codePinATester !== codePin && essais < MAX_ESSAIS) {
  codePinATester = +prompt(
    "Veuillez saisir le code pin pour débloquer l'appareil : "
  );
  essais++;

  if (codePinATester !== codePin) {
    if (essais >= ALERT_ESSAIS && essais < MAX_ESSAIS) {
      alert(
        `Code PIN incorrect. Vous avez ${
          MAX_ESSAIS - essais
        } tentatives restantes.`
      );
    } else if (essais >= MAX_ESSAIS) {
      alert("Appareil bloqué après 5 tentatives incorrectes.");
      break;
    }
  } else {
    alert("Welcome! Appareil débloqué.");
  }
}
