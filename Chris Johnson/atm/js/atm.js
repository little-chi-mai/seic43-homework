
// Balance Storage
let checkingBalance = 0
let savingsBalance = 0
let totalBalance = 0

// Default styling
if (checkingBalance === 0){
  $("#checking .balance").addClass("zero");
}
if (savingsBalance === 0){
  $("#savings .balance").addClass("zero");
}



// Checking Stuff

// Deposit
$("#checking-deposit").on('click', function(){

  // update variable
  checkingBalance = checkingBalance + parseInt($("#checking-amount").val());

  // update text
  $("#checking-balance").text("$" + checkingBalance);

  // update color
  if (checkingBalance > 0){
    $("#checking .balance").removeClass("zero");}

  // update total balances
  totalBalance = (savingsBalance + checkingBalance);

});

// Withdraw
$("#checking-withdraw").on('click', function(){

  // update variable
  if ((checkingBalance - parseInt($("#checking-amount").val())) >= 0){
  checkingBalance = checkingBalance - parseInt($("#checking-amount").val());}
    // if insufficient balance withdraw from other account
    else if (totalBalance - parseInt($("#checking-amount").val()) >= 0){
      savingsBalance = savingsBalance - ((parseInt($("#checking-amount").val())) - checkingBalance);
      checkingBalance = 0;
      // update savings balance
      $("#savings-balance").text("$" + savingsBalance);
      // update color
      if (savingsBalance === 0){
      $("#savings .balance").addClass("zero");}
    };


  // update text
  $("#checking-balance").text("$" + checkingBalance);

  // update color
  if (checkingBalance === 0){
  $("#checking .balance").addClass("zero");}

  // update total balances
  totalBalance = (savingsBalance + checkingBalance);

});



// Savings Stuff

// Deposit
$("#savings-deposit").on('click', function(){

  // update variable
  savingsBalance = savingsBalance + parseInt($("#savings-amount").val());

  // update text
  $("#savings-balance").text("$" + savingsBalance);

  // update color
  if (savingsBalance > 0){
    $("#savings .balance").removeClass("zero");}

  // update total balances
  totalBalance = (savingsBalance + checkingBalance);

});

// Withdraw
$("#savings-withdraw").on('click', function(){

  // update variable
  if ((savingsBalance - parseInt($("#savings-amount").val())) >= 0){
  savingsBalance = savingsBalance - parseInt($("#savings-amount").val());}
    // if insufficient balance withdraw from other account
    else if (totalBalance - parseInt($("#savings-amount").val()) >= 0){
    checkingBalance = checkingBalance - ((parseInt($("#savings-amount").val())) - savingsBalance);
    savingsBalance = 0;
    // update savings balance
    $("#checking-balance").text("$" + checkingBalance);
    // update color
    if (checkingBalance === 0){
    $("#checking .balance").addClass("zero");}
  };


  // update text
  $("#savings-balance").text("$" + savingsBalance);

  // update color
  if (savingsBalance === 0){
    $("#savings .balance").addClass("zero");}

  // update total balances
  totalBalance = (savingsBalance + checkingBalance);

});
