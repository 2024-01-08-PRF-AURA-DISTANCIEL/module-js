const tipForm = document.getElementById("tipForm");

tipForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page

  const billAmount = parseFloat(document.getElementById("billAmount").value);
  const tipPercentage = parseFloat(
    document.getElementById("tipPercentage").value
  );
  const tipAmount = billAmount * tipPercentage;

  document.getElementById(
    "tipResult"
  ).textContent = `Montant du pourboire : ${tipAmount.toFixed(2)} €`;
});
