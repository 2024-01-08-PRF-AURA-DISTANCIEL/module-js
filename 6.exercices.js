class Eleve {
  constructor(id, nom, prenom, age, pays) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.pays = pays;
  }
}

const eleves = [];

eleves.push(new Eleve(1, "Lisangola", "Christian", 12, "Belgique"));
eleves.push(new Eleve(2, "Triki", "Adib", 15, "Italie"));
eleves.push(new Eleve(3, "Himidi", "Nassor", 20, "Japon"));
eleves.push(new Eleve(4, "Blanc", "Olivier", 14, "Espagne"));
eleves.push(new Eleve(5, "Dubois", "Igor", 21, "Portugal"));
eleves.push(new Eleve(6, "Coulet", "Sophie", 20, "Allemagne"));
eleves.push(new Eleve(7, "CEN ZHENG", "Anais", 8, "Corée"));
eleves.push(new Eleve(8, "Zidane", "Zinedine", 5, "Algerie"));
eleves.push(new Eleve(9, "Henry", "Thierry", 26, "France"));
eleves.push(new Eleve(10, "Pires", "Robert", 29, "France"));
eleves.push(new Eleve(11, "Dugary", "Christophe", 30, "Kenya"));

// Sans : Map Garder uniquement le nom complet et l'age
// const classeAvecNomCompletEtAge = [];
// for (let eleve of eleves) {
//   const obj = {
//     nomComplet: `${eleve.prenom} ${eleve.nom}`,
//     age: eleve.age,
//   };
//   classeAvecNomCompletEtAge.push(obj);
// }
// console.log(classeAvecNomCompletEtAge);

// Avec Map

//1. Utilisation : Mettre tous les nombres au carré
const n = [2, 3, 4, 5, 6, 7, 8];

const nCarre = n.map(function (x) {
  return Math.pow(x, 2);
});

//
const classeAvecNomCompletEtAge = eleves.map(function (eleve) {
  return { nomComplet: `${eleve.prenom} ${eleve.nom}`, age: eleve.age };
});

console.log(classeAvecNomCompletEtAge);

// TOus les eleves de plus de 20 ans
const elevePlusDe20Ans = eleves.filter(function (eleve) {
  return eleve.age > 20;
});
console.log(elevePlusDe20Ans);

// Tous les eleves de plus de 20 ans et qui sont français
const elevePlusDe20AnsEtFrançais = eleves.filter(function (eleve) {
  return eleve.age > 20 && eleve.pays === "France";
});
console.log(elevePlusDe20Ans);

// Trouver l'element d'ID 9

const eleveAvecId9 = eleves.find(function (eleve) {
  return eleve.id === 9;
});
console.log(eleveAvecId9);

// ALternative à for
eleves.forEach(function (eleve) {
  console.log(`${eleve.prenom} ${eleve.nom}`);
});
