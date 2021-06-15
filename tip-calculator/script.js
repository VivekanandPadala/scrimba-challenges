document.addEventListener("mouseup", calculate);
document.addEventListener("keyup", calculate);

function calculate() {
  var bill_amount = document.getElementById("bill_value").value;
  var tip = document.getElementById("tip_value").value;
  var number_of_persons = document.getElementById("person_value").value;
  var tip_amount = (parseFloat(tip) / 100) * parseFloat(bill_amount);
  var total_amount = parseFloat(bill_amount) + parseFloat(tip_amount);
  var bill_share = parseFloat(total_amount) / number_of_persons;
  if (isNaN(total_amount)) {
    total_amount = 0;
  }
  if (!isFinite(bill_share)) {
      bill_share = 0;
  }
  document.getElementById("total").innerHTML =
    "[" + "$" + total_amount.toFixed(2) + "]";
  document.getElementById("share").innerHTML =
    "[" + "$" + bill_share.toFixed(2) + "]";
}
