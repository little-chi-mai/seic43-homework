// $(document).ready(function() {});
//initializing a bank account object to store details of bank account balances
const bankAccount = {
  checkingBal: 100,
  savingsBal: 100,
};


//display balances on screen
const screenBal =  $('.balance'); //this returns an array of DOM nodes
const checkingScreenBal = screenBal[0];
const $checkingScreenBal = checkingScreenBal; //changing DOM node to a jQuery object
const savingsScreenBal = screenBal[1];
const $savingsScreenBal = savingsScreenBal; //changing DOM node to a jQuery Object

//collecting all account title H1
let accountNames = $('.account h1');

//display the current account balances on screen
const displayBal = function() {
  $checkingScreenBal.innerHTML = "$ " + bankAccount.checkingBal;
  $savingsScreenBal.innerHTML = "$ " + bankAccount.savingsBal;
};

displayBal();

//withdraw function
const withdraw = function(accountType, amount){
  if(accountType.toUpperCase() === accountNames[0].innerText.toUpperCase()){ //check to see if account type is checking
    if(bankAccount.checkingBal >= amount){
      bankAccount.checkingBal -= amount;
      displayBal();
      $('#checking-amount').val('');
    }else{
      // overdraft protection, if checking account does not have enough money check savings account to withdraw extra amount needed
      let extraBalneeded = amount - bankAccount.checkingBal;
      if(extraBalneeded < bankAccount.savingsBal){
        bankAccount.checkingBal = 0;
        bankAccount.savingsBal -= extraBalneeded;
        displayBal();
        console.log(`Due to insufficient funds in the checking account, we have withdrawn $${extraBalneeded} from your savings account to meet you withdrawal request.`);
        $('#checking-amount').val('');

      } else{
      console.log("Failure to withdraw, insufficient funds in both accounts");
      $('#checking-amount').val('');
      }
    }

    isEmpty(); //function that checks if account bal is $0, if so it becomes red

  }else{ //for accountType savings
    if(bankAccount.savingsBal >= amount){
      bankAccount.savingsBal -= amount;
      displayBal();
      $('#savings-amount').val('');
    } else {

      //overdraft protection
      let extraAmountNeeded = amount - bankAccount.savingsBal;
      if(extraAmountNeeded < bankAccount.checkingBal){
        bankAccount.savingsBal = 0;
        bankAccount.checkingBal -= extraAmountNeeded;
        displayBal();
        console.log(`Due to insufficient funds in the savings account, we have withdrawn $${extraAmountNeeded} from your checking account to meet you withdrawal request.`);
        $('#savings-amount').val('');
      }
      console.log("Failure to withdraw, insufficient funds from both accounts");
      $('#savings-amount').val('');
    }

    isEmpty(); //function that checks if account bal is $0, if so it becomes red
  }

}

//test case for withdraw:
// withdraw("checking", 50)

// attaching the withdraw function to the checking "Withdraw" button
$('#checking-withdraw').on('click', function(){
  withdraw(accountNames[0].innerText, $('#checking-amount').val());
});
// attaching withdraw function to the savings "withdraw button"
$('#savings-withdraw').on('click', function(){
  withdraw(accountNames[1].innerText, $('#savings-amount').val());
});

// the deposit function
const deposit = function(accountType, amount){

  if(accountType.toUpperCase() === accountNames[0].innerText.toUpperCase()){ //check to see if account is checking
      bankAccount.checkingBal += parseInt(amount);
      displayBal();
      isEmpty(); //function that checks if account bal is $0, if so it becomes red
      $('#checking-amount').val('');
  } else{ // for accountType savings
      bankAccount.savingsBal += parseInt(amount);
      displayBal();
      isEmpty(); //function that checks if account bal is $0, if so it becomes red
      $('#savings-amount').val('');
  }
}

//attaching the deposit function to both the checking and savings "deposit" button
$('#checking-deposit').on('click', function(){
  deposit(accountNames[0].innerText, $('#checking-amount').val());
});
$('#savings-deposit').on('click', function(){
  deposit(accountNames[1].innerText, $('#savings-amount').val());
});

//changes the background of the bank account to red when there is $0 in it

const isEmpty = function() {
  if(bankAccount.checkingBal == 0){
    $('#checking-balance').addClass('zero');
  } else {
    $('#checking-balance').removeClass('zero')
  }

  if(bankAccount.savingsBal == 0){
    $('#savings-balance').addClass('zero');
  } else {
    $('#savings-balance').removeClass('zero')
  }
}
