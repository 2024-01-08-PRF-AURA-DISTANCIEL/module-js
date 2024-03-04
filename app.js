// const technos = document.querySelector("#technos");
const technos = document.getElementById("technos");

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

for (let framework of frameworks) {
  technos.innerHTML += `<li>${framework}</li>`;
}
