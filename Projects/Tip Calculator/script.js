// select these ids
/**
billAmount
tipPercent
peopleNo
incrementBtn
decrementBtn
calculateTotalAmount
**/

// select fields
const billAmount = document.getElementById("billAmount");
const tipPercent = document.getElementById("tipPercent");
const peopleNo = document.getElementById("peopleNo");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const calculateTotalAmount = document.getElementById("calculateTotalAmount");

// global variables
let noOfPeople = 1;

// addEventListeners
billAmount.addEventListener("keyup", calculateAmount);
tipPercent.addEventListener("keyup", calculateAmount);
incrementBtn.addEventListener("click", increasePeople);
decrementBtn.addEventListener("click", decreasePeople);

// calculateAmount function
function calculateAmount() {
  const totalBillValue = Number(billAmount.value);
  const tipPercentValue = Number(tipPercent.value) / 100;

  const perPersonAmount =
    (totalBillValue + totalBillValue * tipPercentValue) / noOfPeople;

  calculateTotalAmount.innerText = perPersonAmount.toFixed(2);
}

// increasePeople function
function increasePeople() {
  noOfPeople++;
  peopleNo.innerText = noOfPeople;
  calculateAmount();
}

// decreasePeople function
function decreasePeople() {
  if (noOfPeople == 1) {
    return;
  }

  noOfPeople--;
  peopleNo.innerText = noOfPeople;
  calculateAmount();
}
