const firstNumber = document.querySelector("#first-number");
const secondNumber = document.querySelector("#second-number");
const resultButton = document.querySelector("#result-button");

resultButton.addEventListener("click", function () {
  const resultText = document.querySelector("#result");
  resultText.innerText = Number(firstNumber.value) + Number(secondNumber.value);
});
