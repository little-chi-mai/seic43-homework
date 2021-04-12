
$(document).ready(function () {

  //setting background color to red if balance is 0 otherwise grey
  const balance = function () {

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
  balance();
  $('#checking-deposit').on('click', function () {

    let addMoney = $('#checking-amount').val();
    let checkAccountBalance = $('#checking-balance').text().replaceAll('$','');
    checkAccountBalance = parseInt(checkAccountBalance) + parseInt(addMoney);
    $('#checking-balance').text(`$${checkAccountBalance}`);

    balance();
  });

//withdrawal event for checking account
  $('#checking-withdraw').on('click', function () {

    let accountBalance = $('#checking-balance').text().replaceAll('$', '');
    accountBalance = parseInt(accountBalance);
    let withdrawMoney = $('#checking-amount').val();

    if (withdrawMoney <= accountBalance) {
      //let newBalance = $('#checking-balance').text().replaceAll('$','');
      let newBalance = accountBalance - parseInt(withdrawMoney);
      $('#checking-balance').text(`$${newBalance}`);
      balance();
      return true;
    };

    if (accountBalance === 0 || accountBalance < withdrawMoney) {
      let savingAccountBalance = $('#savings-balance').text().replaceAll('$', '');

      savingAccountBalance = parseInt(savingAccountBalance);

      if (withdrawMoney > (accountBalance + savingAccountBalance)) {
        return false;
      }

      //else if (withdrawMoney <= accountBalance + savingAccountBalance) {
        let firstTransection = withdrawMoney - accountBalance;
        $('#checking-balance').text('$0');
        let secondTransection = savingAccountBalance - firstTransection;
        $('#savings-balance').text(`$${secondTransection}`);

      //}
    };
    balance();
  });

//deposit event for saving account
    $('#savings-deposit').on('click', function () {

      let addMoney = $('#savings-amount').val();
      let savingBalance = $('#savings-balance').text().replaceAll('$', '');
      savingBalance = parseInt(savingBalance) + parseInt(addMoney);
      $('#savings-balance').text(`$${savingBalance}`);

      balance();
    });

//withdrawal event for saving account
    $('#savings-withdraw').on('click', function () {

      savingBalance = $('#savings-balance').text().replaceAll('$', '')
      savingBalance = parseInt(savingBalance);
      let withdrawMoney = $('#savings-amount').val();

      if (savingBalance === 0 || savingBalance < withdrawMoney) {
        return false;
    };

      let newBalance = savingBalance - parseInt(withdrawMoney);
      $('#savings-balance').text(`$${newBalance}`);

      balance();

  });
});
