// TP1
const technos = document.querySelectorAll("li");

const framworks = [
  "Nest.js",
  "Spring",
  "Asp Dotnet Core",
  "Ruby On Rails",
  "Angular",
  "Symfony",
  "Laravel",
  "Dynamo",
];

for (let i = 0; i < technos.length; i++) {
  technos[i].innerText = framworks[i];
}

// TP2
function transformToStartCase(text) {
  const words = text.replace(/-/g, " ").split(" ");
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

for (let i = 0; i < technos.length; i++) {
  technos[i].innerText = `${transformToStartCase(technos[i].className)} - ${
    technos[i].innerText
  }`;
}
