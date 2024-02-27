// Creation des tableaux vides
const numbers = [];
const numbers2 = new Array();

// Creation et remplissage
const numbers3 = [23, 14, 15, 16, 17];

// Boucles for...of
for (let number of numbers3) {
  console.log(number);
}

// Boucle for classique
for (let i = 0; i < numbers3.length; i++) {
  console.log(numbers3[i]);
}
