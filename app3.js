const countries = ["France", "Belgium", "Spain"];
const countries2 = countries; // J'assigne la reference de countries dans countries2. Les deux vont pointer vers le meme tableau en memoire
const countries3 = [...countries]; // Je copie les valeurs de countries dans un nouveau  tableau en memoire. La variable countries 3 aura une reference differente de countries et countries2

// type primitifs(simple)
// type objet

const fcBarcelone2006Brazilians = [
  "Ronaldinho",
  "Belleti",
  "Edmilson",
  "Silvinho",
];

const realMadrid2006Brazilians = [
  "Ronaldo",
  "Robinho",
  "R.Carlos",
  "Cicinho",
  "J.Batista",
];

const brazilNationalTeam = [
  ...fcBarcelone2006Brazilians,
  ...realMadrid2006Brazilians,
];

// shift() : Supprimer le 1er element du tableau -> O(n)
brazilNationalTeam.shift(); // Ceci supprime "Ronaldinho"

// pop() : Supprimer le dernier element du tableau -> O(1)
brazilNationalTeam.pop(); //Ceci supprime J.Batista a la fin du tableau

// unshift() : Ajouter un element du tableau -> O(n)
brazilNationalTeam.unshift("Neymar"); //Ceci ajoute J.B Neymar au debut du tableau
