
$(document).ready(function () {
  let checkingBalance = 0;
  let savingBalance = 0;

  //setting background color to red if balance is 0 otherwise grey
  const checkBalance = function () {
      let checkBalance = $('#checking-balance').text().replaceAll('$', '');
      checkBalance = parseInt(checkBalance);

      let saveBalance = $('#savings-balance').text().replaceAll('$', '');
      saveBalance = parseInt(saveBalance);

      if (checkBalance === 0) {
        $('#checking-balance').css("background-color", "#c12a2a");
      }
      else {
        $('#checking-balance').css("background-color", "#9e9e9e");
      };
      if(saveBalance === 0) {
        $('#savings-balance').css("background-color", "#c12a2a");
      }
      else {
        $('#savings-balance').css("background-color", "#9e9e9e");
    }
  };

//deposit event for checking account
checkBalance();
  $('#checking-deposit').on('click', function () {

    let addMoney = $('#checking-amount').val();
    checkingBalance = checkingBalance + parseInt(addMoney);
    $('#checking-balance').text(`$${checkingBalance}`);
    $('checking-amount').val(0);
    checkBalance();
  });

//withdrawal event for checking account
  $('#checking-withdraw').on('click', function () {

    checkingBalance = $('#checking-balance').text();
    checkingBalance = parseInt(checkingBalance.replace('$', ''))
    let withdrawMoney = $('#checking-amount').val();

    if (withdrawMoney <= checkingBalance) {
      let newBalance = checkingBalance - parseInt(withdrawMoney);
      $('#checking-balance').text(`$${newBalance}`);
      return true;
    };

    if (checkingBalance === 0 || checkingBalance < withdrawMoney) {
        if (withdrawMoney > checkingBalance + savingBalance) {
        return false;
        }
        else if (withdrawMoney < checkingBalance + savingBalance) {

          let firstTransection = withdrawMoney - checkingBalance;
          $('#checking-balance').text('$0');
          let secondTransection = savingBalance - firstTransection;
          $('#savings-balance').text(`$${secondTransection}`);

          }
        };
      $('checking-amount').val(0);
      checkBalance();
    });

//deposit event for saving account
    $('#savings-deposit').on('click', function () {

      let addMoney = $('#savings-amount').val();
      savingBalance = savingBalance + parseInt(addMoney);
      $('#savings-balance').text(`$${savingBalance}`);

      checkBalance();
    });


//withdrawal event for saving account
    $('#savings-withdraw').on('click', function () {

      savingBalance = $('#savings-balance').text();
      savingBalance = parseInt(savingBalance.replace('$', ''))
      let withdrawMoney = $('#savings-amount').val();

      if (savingBalance === 0 || savingBalance < withdrawMoney) {
        return false;
    };

      let newBalance = savingBalance - parseInt(withdrawMoney);
      $('#savings-balance').text(`$${newBalance}`);

      checkBalance();

  });
});
