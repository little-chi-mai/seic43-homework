// check if $0 balance and change css format/class if so
  // const checkForZero = function() {
  //   $('.zero').removeClass('zero');
  //   const checkingBal = + $('checking-balance').text().slice(1);
  //   if(checkingBalance <= 0) {
  //     $('checking-balance').addClass('zero');
  //   }
  //   const savingsBal = + $('savings-balance').text().slice(1);
  //   if(savingsBalance <= 0) {
  //     $('savings-balance').addClass('zero');
  //   }
  // };
//outside the document ready because it's always available outside the dom etc (global scope)


////ALSO A BUG HERE (checkForZero) - I think it's because I've declared the checkingBalance and savingsBalance as let and then again in the checkForZero function?? Mai - is that the case??

$(document).ready(function () {

// checkForZero();

//store checking account balance
  let checkingBalance = $('checking-balance').html(); // = null (initially);

//store savings account balance
  let savingsBalance = $('savings-balance').html(); // = null (initially);

//Receive deposit request to checking account and add to checkingBalance;
$('#checking-deposit').click(function() {
    const inputCheckingDeposit = $('#checking-amount').val();
    const depositChecking = parseFloat(inputCheckingDeposit);

    if(checkingBalance === null && depositChecking > 0) {
        $('#checking-balance').html(`$${depositChecking}`);
        return checkingBalance = depositChecking;
  }
    if(checkingBalance != null && depositChecking > 0){
        let newTotalChecking = checkingBalance + depositChecking;
        $('#checking-balance').html(`$${ newTotalChecking }`);
        return checkingBalance = newTotalChecking;
  } else {
        return;
  }
}); //end deposit to check account function;
// checkForZero();

//Receive withdrawal request on checking account - BUG HERE - lets you overdraw when taking from the other account (savings) - USE JOEL'S SOLTUTION AS A REFERENCE INSTEAD
$('#checking-withdraw').click(function() {
  const inputCheckingWithdrawal = $('#checking-amount').val();
  const withdrawalChecking = parseFloat(inputCheckingWithdrawal);

  if(withdrawalChecking > checkingBalance && withdrawalChecking > 0){
    const overdrawDifference = withdrawalChecking - checkingBalance;
    $('#checking-balance').html(`$${ checkingBalance = 0 }`);
    $('#savings-balance').html(`$${ savingsBalance = (savingsBalance - overdrawDifference) }`);
    return;
    }
  else if (withdrawalChecking > 0){
    let checkingDraw = checkingBalance - withdrawalChecking;
    $('#checking-balance').html(`$${ checkingDraw }`);
    return checkingBalance = checkingDraw;
  }
});//end checking account withdrawal function
// checkForZero();
//Receive deposit request to savings account and add to savingsBalance;
  $('#savings-deposit').click(function() {
    let inputSavings = $('#savings-amount').val();
    const depositSavings = parseFloat(inputSavings);
    if(savingsBalance === null && depositSavings > 0) {
      $('#savings-balance').html(`$${depositSavings}`);
      return savingsBalance = depositSavings;
  } if(savingsBalance != null && depositSavings > 0){
        let newTotalSavings = savingsBalance + depositSavings;
        $('#savings-balance').html(`$${ newTotalSavings }`);
        return savingsBalance = newTotalSavings;
  } else {
        return ;
  }
}); //END - deposit to savings account function;
// checkForZero();

}); // END - $(document).ready function;
