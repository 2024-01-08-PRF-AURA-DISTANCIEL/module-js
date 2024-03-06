const tipForm = $("#tipForm");

tipForm.on("submit", function (event) {
  event.preventDefault();
  const billAmount = parseFloat($("#billAmount").val());
  const tipPercentage = parseFloat($("#tipPercentage").val());
  const tipAmount = billAmount * tipPercentage;
  $("#tipResult").text(tipAmount);
});
