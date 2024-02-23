const language = prompt("Choisir une langue : ");

if (language.toLowerCase() === "french") {
  alert("Salut!!!");
} else if (language.toLowerCase() === "english") {
  alert("Hi!!!");
} else if (language.toLowerCase() === "german") {
  alert("Guten tag");
} else if (language.toLowerCase() === "spanish") {
  alert("Hola!");
} else {
  alert("Langue non supportée");
}

// switch (language.toLowerCase()) {
//   case "french":
//     alert("Salut!!!");
//     break;
//   case "english":
//     alert("Hi!!!");
//     break;
//   case "german":
//     alert("Guten tag");
//     break;
//   case "spanish":
//     alert("Hola!");
//     break;
//   default:
//     alert("Langue non supportée");
// }
