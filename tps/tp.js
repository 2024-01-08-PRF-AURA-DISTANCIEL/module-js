// Récupérer les éléments du DOM
const addBtn = document.querySelector("#add-tech");
const techList = document.querySelector(".technos");
const resetBtn = document.querySelector("#reset-btn");

// Tableau des technologies à ajouter
const frameworks = [
  "Nest.js",
  "Spring",
  "Asp Dotnet Core",
  "Ruby On Rails",
  "Angular",
  "Symfony",
  "Laravel",
  "Dynamo",
];

let currentIndex = 0;

// Gestionnaire d'événement pour le clic sur Ajouter
addBtn.addEventListener("click", () => {
  // Vérifier s'il reste des éléments à ajouter
  if (currentIndex < frameworks.length) {
    // Créer un nouvel élément
    const li = document.createElement("li");
    li.textContent = frameworks[currentIndex];

    // L'ajouter à la liste
    techList.appendChild(li);

    // Incrémenter l'index
    currentIndex++;
  } else {
    // Désactiver le bouton Ajouter
    addBtn.disabled = true;

    // Activer le bouton Réinitialiser
    resetBtn.disabled = false;
  }
});

// Gestionnaire pour le bouton Réinitialiser
resetBtn.addEventListener("click", () => {
  // Vider la liste
  techList.innerHTML = "";

  // Réinitialiser l'index
  currentIndex = 0;

  // Réactiver le bouton Ajouter
  addBtn.disabled = false;

  // Désactiver le bouton Réinitialiser
  resetBtn.disabled = true;
});
