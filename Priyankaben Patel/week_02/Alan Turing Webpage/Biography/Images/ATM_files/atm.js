
//let addBalance = document.getElementById("checking-amount");
let btn1 = document.getElementById("checking-deposit");
let btn2 = document.getElementById("checking-withdraw");

let addBalance = 0;

let deposit = function () {

//retrive the value
  let addMoney = document.getElementById("checking-amount").value;
  //console.log(addMoney);
  addBalance = addBalance + parseInt(addMoney);
  document.getElementById("checking-balance").innerText = addBalance;

};
btn1.onclick = function() { alert ('blah');};
// $('btn1').on ('click', deposit);
// btn1.addEventListener("click", deposit);
