const technos = document.querySelectorAll("li");

// for (let techno of technos) {
//   // techno.style.backgroundColor = "indigo";
//   // techno.style.color = "orangered";
//   // techno.style.fontSize = "20px";
//   // techno.style.border = "1px solid orangered";
//   // techno.classList.add("tech");
// }

for (let techno of technos) {
  techno.addEventListener("click", function () {
    // techno.classList.add("tech");
    // this.classList.add("tech");

    // Mauvaise pratique car tout ce  qu'on c'est d'ajouter/supprimer une classe.
    // if (this.classList.contains("tech")) {
    //   this.classList.remove("tech");
    // } else {
    //   this.classList.add("tech");
    // }

    // Bonne pratiques
    this.classList.toggle("tech");
  });
}

document.body.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  console.log("Les clics droit son interdits");
});
