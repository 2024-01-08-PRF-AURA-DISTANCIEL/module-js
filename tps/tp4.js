// Demande de l'âge à l'utilisateur
let age = prompt("Donnez votre âge : ");

// Conversion de la réponse en un nombre entier
age = parseInt(age);

// Obtention de l'année courante
const anneeCourante = new Date().getFullYear();

// Calcul de l'année de naissance
let annee = anneeCourante - age;

// Affichage de l'année de naissance
console.log(`Votre année de naissance est : ${annee}`);
