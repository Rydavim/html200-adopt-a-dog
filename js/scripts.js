// alert dog's info on photo click
function dogAlert(name, breed, fees) {
  alert("Name: " + name + "\nBreed: " + breed + "\nFees: " + fees);
}

// add adoption fees to total and alert
let cartTotal = 0;
function cartAdd(fees) {
  cartTotal = cartTotal + fees;
  alert("Cart Total: $" + cartTotal); // how to format with hundredths?
  return cartTotal;
}
