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
