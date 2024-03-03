const temperatureForm = document.getElementById("temperatureForm");

temperatureForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page
  const temperature = parseFloat(
    document.getElementById("temperatureInput").value
  );
  const conversionType = document.getElementById("conversionType").value;
  let result;

  if (conversionType === "CtoF") {
    result = (temperature * 9) / 5 + 32;
  } else if (conversionType === "FtoC") {
    result = ((temperature - 32) * 5) / 9;
  }

  document.getElementById(
    "conversionResult"
  ).textContent = `Résultat : ${result.toFixed(2)}`;
});
