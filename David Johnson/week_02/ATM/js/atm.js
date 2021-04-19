$(document).ready(function (){

//let checkingBalance = $('#checking-blance').val();
//let savingsBalance = $('#savings-blance').val();
let checkingBalance = 0;
let savingsBalance = 0;
let totalBalance = 0;

//adds deposits to the checking account
$("#checking-deposit").click(function() {
  checkingBalance = checkingBalance + parseInt($("#checking-amount").val());
  totalBalance = totalBalance + parseInt($("#checking-amount").val());
  $("#checking-balance").text("$"+checkingBalance);
  if (checkingBalance > 0) {
    $("#checking .balance").removeClass("zero");
  }
  $("#checking-amount").val("");
});

//adds deposits to the savings account
$("#savings-deposit").click(function() {
  savingsBalance = savingsBalance + parseInt($("#savings-amount").val());
  totalBalance = totalBalance + parseInt($("#savings-amount").val());
  $("#savings-balance").text("$"+savingsBalance);
  if (savingsBalance > 0) {
    $("#savings .balance").removeClass("zero");
  }
  $('#savings-amount').val("");
});

//pulls withdrawals from checking
$('#checking-withdraw').click(function() {
      if (checkingBalance - parseInt($("#checking-amount").val()) >= 0) {
        checkingBalance = checkingBalance - parseInt($("#checking-amount").val());
        totalBalance = totalBalance - parseInt($("#checking-amount").val());
        $("#checking-balance").text("$"+checkingBalance);

      } else if (savingsBalance - (parseInt($("#checking-amount").val()) - checkingBalance) >= 0) {
        savingsBalance = savingsBalance - (parseInt($("#checking-amount").val()) - checkingBalance);
        $("#savings-balance").text("$"+savingsBalance);
        checkingBalance = 0;
        $("#checking-balance").text("$"+checkingBalance);

        if (savingsBalance === 0) {
          $("#savings-balance").addClass("zero");
        }
      }
      if (checkingBalance === 0) {
        $("#checking .balance").addClass("zero");
      }
      $("#checking-amount").val("");
});
//pulls withdrawals from savings
$('#savings-withdraw').click(function() {

    if (savingsBalance - parseInt($("#savings-amount").val()) >=0) {
      savingsBalance = savingsBalance - parseInt($("#savings-amount").val());
      totalBalance = totalBalance - parseInt($("#savings-amount").val());
      $("#savings-balance").text("$"+savingsBalance);

  } else if (checkingBalance - (parseInt($("#savings-amount").val()) - savingsBalance) >= 0) {
      checkingBalance = checkingBalance - (parseInt($("#savings-amount").val()) - savingsBalance);
      $("#checking-balance").text("$"+checkingBalance);
      savingsBalance = 0;
      $("#savings-balance").text("$"+savingsBalance);

      if (checkingBalance === 0) {
        $("#checking-balance").addClass("zero");
      }
    }
      if (savingsBalance === 0) {
        $("#savings .balance").addClass("zero");
      }
    $("#savings-amount").val("");
});

//colors the background for different account balances
if (parseInt(checkingBalance) === 0) {
  $("#checking .balance").addClass("zero");
}

if (parseInt(savingsBalance) === 0) {
  $("#savings .balance").addClass("zero");
}

});
