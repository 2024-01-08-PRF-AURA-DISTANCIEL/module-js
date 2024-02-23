const fname = prompt("Veuillez entrer votre prenom : ");
const lname = prompt("Veuillez entrer votre nom de famille : ");
const age = prompt("Veuillez entrer votre age : ");

// alert(`Vous vous appelez ${fname} ${lname}, et vous avez ${age} ans.`);
// console.log(`Vous vous appelez ${fname} ${lname}, et vous avez ${age} ans.`);
console.log(`Prenom : ${fname}
Nom : ${lname}
Age : ${age} ans.
`);

// console.log(
//   "Vous vous appelez " + fname + " " + lname + ", et vous avez " + age + " ans."
// );
// console.log("Vous vous appelez %s %s, et vous avez %d ans.", fname, lname, age);

console.log("Prenom : %s\nNom: %s\nAge : %d ans.", fname, lname, age);
