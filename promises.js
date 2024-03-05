// Resolve : tout s'est bien passé(Ex : le serveur envoi les données avec un code de status 200)
// Reject : Il y a eu une erreur (Ex : Par exemple, la ressource n'existe et le serveur renvoi un 404)
// const rendreVisiteAmonAmi = new Promise(function (resolve, reject) {
//   resolve("Je serai là");
//     reject("Désolé, urgence de dernière minute.");
// });

function rendreVisiteAMonAmi(heure) {
  return new Promise((resolve, reject) => {
    if (heure >= 0 && heure <= 23) {
      if (heure >= 16 && heure <= 21) {
        resolve("J'arrive, je suis en route");
      } else {
        reject("Désolé, urgence de dernière minute.");
      }
    } else {
      reject("Heure non valide...");
    }
  });
}

rendreVisiteAMonAmi(18)
  .then((value) => {
    console.log("Valeur : ", value);
    console.log("Réponse d'Olivier : Parfait, je suis déjà chez moi");
  })
  .catch((errorValue) => {
    console.log("Raison : ", errorValue);
    console.log(
      "Réponse d'Olivier : Comme d'habitude, tu ne tiens jamais tes promesses."
    );
  });
