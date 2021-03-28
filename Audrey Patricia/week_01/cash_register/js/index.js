// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
//
// ```
// // Input

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
//cartForParty//using Object.VALUES()
const cashRegister = function(shoppingCart) {

  const arrayOfPrices = Object.values(shoppingCart);
  let totalPrice = 0;

  for(let i = 0; i < arrayOfPrices.length; i++){
    totalPrice += parseFloat(arrayOfPrices[i]);
  }

  return totalPrice;
}


//same function TO MAKE IT WORK WITH OBJECT.KEYS()
// const cashRegister = function(cart){

//   const keyArray = Object.keys(cart);
//   let sum = 0;
//
//
//   for(let i = 0 ; i < keyArray.length; i++){
//     sum += parseFloat(cart[keyArray[i]]);
//   }
//
//
//   console.log("Total price: " + sum)
// }
//
// cashRegister(cartForParty);


// // Output
// console.log("The total comes to: " + "$" + cashRegister(cartForParty)); // 60.55
