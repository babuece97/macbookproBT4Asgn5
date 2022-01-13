// Added extra memory
function memoryCost(inputMemory) {
  if (inputMemory == "added16gbmemory") {
    document.getElementById("extra-memory").innerText = 180;
  } else {
    document.getElementById("extra-memory").innerText = 0;
  }
}
// added extra storage
function storageCost(inputStorage) {
  if (inputStorage == "added256ssd") {
    document.getElementById("extra-storage").innerText = 0;
  } else if (inputStorage == "added512ssd") {
    document.getElementById("extra-storage").innerText = 100;
  } else {
    document.getElementById("extra-storage").innerText = 180;
  }
}
// Added delivery cost
function addDelivery(inputDelivery) {
  if (inputDelivery == "freeDelivery") {
    document.getElementById("delivery-charge").innerHTML = 0;
  } else {
    document.getElementById("delivery-charge").innerHTML = 20;
  }
}
// calculate total cost
function totalCost() {
  const fixedPricetext = document.getElementById("fixed-price").innerText;
  const fixedPrice = parseFloat(fixedPricetext);

  const memoryCostText = document.getElementById("extra-memory").innerText;
  const memoryCost = parseFloat(memoryCostText);

  const extraStoragetext = document.getElementById("extra-storage").innerText;
  const extraStorage = parseFloat(extraStoragetext);

  const deliverCosttext = document.getElementById("delivery-charge").innerText;
  const deliveryCharge = parseFloat(deliverCosttext);

  document.getElementById("Total Price").innerText =
    fixedPrice + memoryCost + extraStorage + deliveryCharge;

  document.getElementById("apply-discount").innerText =
    document.getElementById("Total Price").innerText;
}
document.getElementById("8gb-memory").addEventListener("click", function () {
  const addMemory = "added8gbmemory";
  memoryCost(addMemory);
  totalCost();
});

// Apply promo code
function applyDiscount() {
  totalCost();
  const input = document.getElementById("promo-code").value;

  const currentPriceText = document.getElementById("apply-discount").innerText;

  const currentPrice = parseFloat(currentPriceText);

  if (input == "stevekaku") {
    const totalDiscount = currentPrice * 0.2;
    const afterDiscount = currentPrice - totalDiscount;
    document.getElementById("apply-discount").innerText = afterDiscount;
  }
  document.getElementById("promo-code").value = "";
}

document.getElementById("16gb-memory").addEventListener("click", function () {
  const addMemory = "added16gbmemory";
  memoryCost(addMemory);
  totalCost();
});
document.getElementById("256-ssd").addEventListener("click", function () {
  const addStorage = "added256ssd";
  storageCost(addStorage);
  totalCost();
});
document.getElementById("512-ssd").addEventListener("click", function () {
  const addStorage = "added512ssd";
  storageCost(addStorage);
  totalCost();
});
document.getElementById("1tb-ssd").addEventListener("click", function () {
  const addStorage = "added1Tb-ssd";
  storageCost(addStorage);
  totalCost();
});

document.getElementById("free-delivery").addEventListener("click", function () {
  const deliverCost = "freeDelivery";
  addDelivery(deliverCost);
  totalCost();
});
document
  .getElementById("delivery-with-price")
  .addEventListener("click", function () {
    const deliverCost = "deliveryWithCharge";
    addDelivery(deliverCost);
    totalCost();
  });

document.getElementById("discount").addEventListener("click", function () {
  applyDiscount();
});
