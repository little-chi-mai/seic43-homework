$(document).ready(function () {
  // set initial background color to red
  $("#checking-balance").css("background-color", `red`);
  $("#savings-balance").css("background-color", `red`);

  // global variable to record accounts balance
  const accounts = {
    checking: 0,
    savings: 0,
  };

  // event handler
  const bankTransfer = (accountName, transferType) => {
    // retrieve current values and convert to number
    let accountBalance =
      $(`#${accountName}-balance`).text().split("").slice(1).join("") - 0;
    let inputAmount = $(`#${accountName}-amount`).val() - 0;
    let overallBalance = accounts["checking"] + accounts["savings"];

    if (transferType === "deposit") {
      // increase balance if deposit
      accountBalance += inputAmount;
    } else {
      // decrease balance if withdraw
      if (accountBalance - inputAmount >= 0) {
        accountBalance -= inputAmount;
      } else {
        // if withdraw amount more than overall amount in all accounts, show 'Not enough fund'
        if (inputAmount > overallBalance) {
          alert("Not enough fund");
        } else {
          // if withdraw amount less than overall amount in all accounts, set account balance to zero then decrease rest of the amount from another account
          const accountsCopy = accounts;
          delete accountsCopy[`${accountName}`];
          const anotherAccountName = Object.keys(accountsCopy)[0];
          accounts[`${anotherAccountName}`] -= inputAmount - accountBalance;
          accountBalance = 0;
          $(`#${anotherAccountName}-balance`).text(
            `$${Math.round(accounts[`${anotherAccountName}`] * 100) / 100}`
          );
          if (accounts[`${anotherAccountName}`] > 0) {
            $(`#${anotherAccountName}-balance`).css("background-color", `#E3E3E3`);
          } else {
            $(`#${anotherAccountName}-balance`).css("background-color", `red`);
          }
        }
      }
    }

    // update the balance in global variable
    accounts[accountName] = accountBalance;

    // round the shown balance
    $(`#${accountName}-balance`).text(
      `$${Math.round(accountBalance * 100) / 100}`
    );

    // reset input to emty
    $(`#${accountName}-amount`).val("");

    // change background color to red if balance is zero, otherwise grey
    if (accountBalance > 0) {
      $(`#${accountName}-balance`).css("background-color", `#E3E3E3`);
    } else {
      $(`#${accountName}-balance`).css("background-color", `red`);
    }
  };

  // add event listeners
  $("#checking-deposit").on("click", function () {
    bankTransfer("checking", "deposit");
  });

  $("#checking-withdraw").on("click", function () {
    bankTransfer("checking", "withdraw");
  });

  $("#savings-deposit").on("click", function () {
    bankTransfer("savings", "deposit");
  });

  $("#savings-withdraw").on("click", function () {
    bankTransfer("savings", "withdraw");
  });
});
