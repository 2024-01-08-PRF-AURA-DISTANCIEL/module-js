const age = Number(prompt("Votre age : "));

// Boolean : true/false
const estMajeur = age >= 18;

if (estMajeur) {
  alert("Vous êtes eligible.");
} else {
  alert("Vous n'êtes pas eligible.");
}

// Truthy/falsey
const fname = "chris"; //truthy : est évalué à true dans un test
const lname = ""; // falsey : est évalué à false dans un test
const nombre = 0; //falsey : est évalué à false dans un test
const nombre2 = 2; // truthy : est évalué à true dans un test

// Va donner true, parce que fname est truthy
if (fname) {
  console.log("Vraii!!!");
} else {
  console.log("Faux!!");
}

// Va donner false, parce que fname est falsey
if (lname) {
  console.log("Vraii!!!");
} else {
  console.log("Faux!!");
}

// Egalité strict : ===
// Difference strict : !==
// OU/OR logique : ||
// ET/AND : &&