// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example

// ```
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };

// // Output
// cashRegister(cartForParty)); // 60.55
// ```

const cashRegister = (shoppingCart) => {
  const goods = Object.keys(shoppingCart);
  let overallPrice = 0;
  for (let i = 0; i < goods.length; i++) {
    overallPrice += shoppingCart[goods[i]] - 0;
  }
  return overallPrice;
};

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36",
};

console.log(cashRegister(cartForParty));
