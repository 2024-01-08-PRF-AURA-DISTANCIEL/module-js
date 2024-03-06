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

let currentIndex = 0;

const addBtn = $("#add-tech");
const techList = $(".technos");
const resetBtn = $("#reset-btn");

addBtn.click(function () {
  if (currentIndex < frameworks.length) {
    const tech = $("<li></li>").text(frameworks[currentIndex]);
    techList.append(tech);
    currentIndex++;
  } else {
    addBtn.prop("disabled", true);
    resetBtn.prop("disabled", false);
  }
});

resetBtn.click(function () {
  currentIndex = 0;
  techList.html("");
  addBtn.prop("disabled", false);
  resetBtn.prop("disabled", true);
});
