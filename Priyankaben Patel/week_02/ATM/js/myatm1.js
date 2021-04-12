$(document).ready(function(){
  //let addBalance = document.getElementById("checking-amount");
  let btn1 = document.getElementById("checking-deposit");
  let btn2 = document.getElementById("checking-withdraw");

  let checkingBalance = 0;
  let savingBalance = 0;
  const checkBalance = function () {
      let balance = $(".balance").text().replaceAll('$', '');
      balance = parseInt(balance);

    if (balance <= 0){
      $(".balance").css("background-color", "#c12a2a");
      }
    else {
      $(".balance").css("background-color", "#9e9e9e");
    }
    return balance;
  };

checkBalance();

// add money to Checking account
  let deposit = function () {

  //retrive the value
    let addMoney = document.getElementById("checking-amount").value;
    checkingBalance = checkingBalance + parseInt(addMoney);
    document.getElementById("checking-balance").innerText = `$${checkingBalance}`;

    checkBalance();

  };

//withdraw money from checking account
  let withdraw = function () {

    checkingBalance = document.getElementById("checking-balance").innerText.replace('$', '');
    let withdrawMoney = document.getElementById("checking-amount").value;
    if (parseInt(checkingBalance)  === 0 || parseInt(checkingBalance) < withdrawMoney) {
      return false;
    };

    let newBalance = parseInt(checkingBalance) - parseInt(withdrawMoney);

    document.getElementById("checking-balance").innerText = `$${newBalance}`;;
    checkBalance();
  };

  // window.onload = function(){
  //   document.getElementById("checking-deposit").addEventListener('click',deposit);
  // }
  //$('btn1').on ('click', deposit);
  btn1.addEventListener("click", deposit);
  btn2.addEventListener("click", withdraw);

// Saving account

let btn3 = document.getElementById("savings-deposit");
let btn4 = document.getElementById("savings-withdraw");

let depositToSaving = function () {

//Add money to saving account

  let addMoney = document.getElementById("savings-amount").value;
  savingBalance = savingBalance + parseInt(addMoney);
  document.getElementById("savings-balance").innerText = `$${savingBalance}`;

  checkBalance();
};
let withdrawFromSaving = function () {

  checkingBalance = document.getElementById("savings-balance").innerText.replace('$', '');
  let withdrawMoney = document.getElementById("savings-amount").value;
  if (parseInt(checkingBalance)  === 0 || parseInt(checkingBalance) < withdrawMoney) {
    return false;
  };

  let newBalance = parseInt(checkingBalance) - parseInt(withdrawMoney);

  document.getElementById("savings-balance").innerText = `$${newBalance}`;;
  checkBalance();
};


btn3.addEventListener("click", depositToSaving);
btn4.addEventListener("click", withdrawFromSaving);
});
