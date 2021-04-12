$(document).ready(function () {

//create jQuery objects for each of the 4 buttons
const $checkDepositButton = $('#checking-deposit');
const $savingsDepositButton = $('#savings-deposit');
const $checkWithdrawButton = $('#checking-withdraw');
const $savingsWithdrawButton = $('#savings-withdraw')


//function to determine which account is the current one
const findCurrentAccount = function (button){

  if(button.id === 'checking-deposit' || button.id === 'checking-withdraw') {
    return $('#checking-balance');
  } else {
    return $('#savings-balance');
  }
}

//function to grab the other account to allow for overdraft function
const findOtherAccount = function (currentBalanceObject) {
  let otherAccount; // initialise variable to return

  if (currentBalanceObject.parent().attr('id') === 'checking') {
    otherAccount = $('#savings-balance');
  } else {
    otherAccount = $('#checking-balance')
  }
  return otherAccount;
}

//main function which changes the balance with each click

const changeBalance = function () {

  //grab objects for both accounts from the DOM, as well as the user input object.
  const $curBalObj = findCurrentAccount(this);
  const $userInputObj = $curBalObj.next();
  const $otherBalObj = findOtherAccount($curBalObj);

  //set variable / determine the balance in each account - converting from string to num and removing '$' to allow for numerical manipulation
  const currentBalance = parseInt($curBalObj.text().replace('$',''));
  const otherAccountBalance = parseInt($otherBalObj.text().replace('$',''));

  //set variable for the value of user input - converting from string to num and removing '$' if present to allow for numerical manipulation
  let userInputVal = parseInt($userInputObj.val().replace('$', ''));


  //if the withdraw button is clicked, make the value of the user input negative so it will be subtracted from balance in the below expression.
  if(this.id === 'checking-withdraw' || this.id === 'savings-withdraw') {
    userInputVal = -(userInputVal);
  }

  //Add or subtract the user input from the balance (see above which makes userInputVal negative if it's a withdrawal)
  const newBalance = currentBalance + userInputVal;

  //if else statements to determine behavior based on the value of newBalance

  if(newBalance > 0) {

    $curBalObj.text(`$${parseInt(newBalance)}`);
    $curBalObj.removeClass('balanceZero');
    $curBalObj.addClass('balancePositive');

  } else if (newBalance === 0){

    $curBalObj.text(`$${parseInt(newBalance)}`);
    $curBalObj.removeClass('balancePositive');
    $curBalObj.addClass('balanceZero');

  } else if (newBalance < 0 && otherAccountBalance >= -(newBalance)){

    $curBalObj.text('$0');
    $curBalObj.removeClass('balancePositive');
    $curBalObj.addClass('balanceZero');
    $otherBalObj.text(`$${otherAccountBalance + newBalance}`)

    if ((otherAccountBalance + newBalance) === 0 ){
      $otherBalObj.removeClass('balancePositive');
      $otherBalObj.addClass('balanceZero');
    }

    alert(`In order to proceed with this transaction, we will withdraw $${-(newBalance)} from your ${$otherBalObj.parent().attr('id')} account.`)
  } else {

    alert ('Sorry, you do not have sufficient funds in your accounts to make a withdrawal at this time.')

  }
}

//event listeners for each button which call main function changeBalance
$checkDepositButton.on('click',changeBalance);
$savingsDepositButton.on('click',changeBalance);
$checkWithdrawButton.on('click', changeBalance);
$savingsWithdrawButton.on('click', changeBalance);

}); //end of document.ready
