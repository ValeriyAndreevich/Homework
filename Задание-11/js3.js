const account = {
  bwPrint: 20,
  bwCopy: 15,
  colorPrint: 50,
  colorCopy: 40,
  photo3040: 60,
  photo5060: 100,
};

document.getElementById("bwPrint").textContent = account.bwPrint;
document.getElementById("bwCopy").textContent = account.bwCopy;
document.getElementById("colorPrint").textContent = account.colorPrint;
document.getElementById("colorCopy").textContent = account.colorCopy;
document.getElementById("photo3040").textContent = account.photo3040;
document.getElementById("photo5060").textContent = account.photo5060;

let quantity1 = document.getElementById("quantityBWPrint");
let quantity2 = document.getElementById("quantityBWCopy");
let quantity3 = document.getElementById("quantityColorPrint");
let quantity4 = document.getElementById("quantityColorCopy");
let quantity5 = document.getElementById("quantityPhoto3040");
let quantity6 = document.getElementById("quantityPhoto5060");

let sum1 = document.getElementById("sum0");

quantity1.addEventListener("keyup", function () {
  sum1.value = quantity1.value * account.bwPrint;
  sum1.textContent = sum1.value;
});
quantity1.addEventListener("click", function () {
  sum1.value = quantity1.value * account.bwPrint;
  sum1.textContent = sum1.value;
});
