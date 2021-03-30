// # JavaScript Bank
//
// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write.
//
// #### Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts.
// It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// #### Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// ### Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// ## Bonus
//
// - Ensure that the accounts cannot have negative values.
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
//
// ## Additional
//
// Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them.

const account1 = {
  ownerName: "Audrey",
  currentBal: 100,
}

const account2 = {
  ownerName: "Bob",
  currentBal: 2000,
}

const account3 = {
  ownerName: "Karen",
  currentBal: 25,
}

const accounts = [account1, account2, account3];

// creating a function to add new Accounts
const addAccount = function(name, initialBal){

  const newAccount = {
    ownerName: name,
    currentBal: initialBal,
  }

  accounts.push(newAccount);
}

//function to find out the total amount of funds within the bank
const totalMoneyInBank = function(){
  let totalFunds = 0;
  for(let i = 0; i < accounts.length; i++){
    totalFunds += accounts[i].currentBal;
  }
  console.log(`The bank has a total of $${totalFunds} funds available currently from their accounts`);
  return totalFunds;
}

//function to deposit money into an account
const deposit = function(accName, depositAmount){

if(verifyAccount(accName) === true){

  for(let i = 0; i < accounts.length; i++){

    if(accounts[i].ownerName === accName){
      accounts[i].currentBal += depositAmount;
      console.log(`${accounts[i].ownerName} deposited $${depositAmount}, and now has a current balance of $${accounts[i].currentBal} in their account`);
      return accounts[i].currentBal;
    }
  }
} else {
    console.log(`Unable to deposit. The account name ${accName} is not registered with this bank`);
}
}

//function to withdraw money from an account
const withdraw = function(accName, withdrawnAmount){
//verifies first that the account is with the bank
  if( verifyAccount(accName) === true){

  for(let i = 0; i < accounts.length; i++){

    if(accounts[i].ownerName === accName){
      accounts[i].currentBal -= withdrawnAmount;
      if(accounts[i].currentBal < 0){ // checks to see if the balance after withdrawing will be negative or not, if negative do not proceed with withdrawal
        accounts[i].currentBal += withdrawnAmount; // brings the balance back to its value before withdrawn --> because the amount cannot be withdrawn
        console.log(`Failure to withdraw: Insufficient funds. You only have a balance of $${accounts[i].currentBal}`);
      }else {
        console.log(`${accounts[i].ownerName} withdrawed $${withdrawnAmount}, and now has a current balance of $${accounts[i].currentBal} in their account`);
        return accounts[i].currentBal;
      }
    }
  }

} else {
    console.log(`Unable to withdraw. The account name ${accName} is not registered with this bank`);
}

}

// a function that verifies accounts are with the Bank
const verifyAccount = function(accountName){

  let exists = false;

  for(let i = 0 ; i < accounts.length; i++){
    if(accounts[i].ownerName === accountName){
      exists = true
      return true;
    }
  }

  if(exists === false){
    return false;
  }
}

// a function that allows transfer of funds between accounts

//DOESNT WORK
const transfer = function(payeeAcc, recAcc, tfrAmount){

  let payeeAccVerified = false;
  let recAccVerified = false;
  let payeeIndex;
  let recIndex;

  if(verifyAccount(payeeAcc) === true){
    payeeAccVerified = true;
  }

  if(verifyAccount(recAcc) === true){
    recAccVerified = true;
  }

for(let i = 0 ; i < accounts.length; i++){

  if(accounts[i].ownerName === payeeAcc){
    payeeIndex = i;
  }else if(accounts[i].ownerName === recAcc){
    recIndex = i
  }

}

  if(payeeAccVerified === false){
    console.log(`Unable to proceed with transfer. The payee account name ${payeeAcc} is not an account with this bank.`)
    return;
  }else if(recAccVerified === false){
    console.log(`Unable to proceed with transfer. The receiving account name ${recAcc} is not an account with this bank.`)
    return;
  }else{
    accounts[payeeIndex].currentBal -= tfrAmount;

    if(accounts[payeeIndex].currentBal < 0){ // checks to see if the balance after withdrawing will be negative or not, if negative do not proceed with withdrawal
      accounts[payeeIndex].currentBal += tfrAmount; // brings the balance back to its value before withdrawn --> because the amount cannot be withdrawn
      console.log(`Failure to transfer: Insufficient funds. You only have a balance of $${accounts[payeeIndex].currentBal}`);
      return;
    }else {
      accounts[recIndex].currentBal += tfrAmount;
    }

  }

  console.log(`Transfer successful. You have sent the account name ${accounts[recIndex].ownerName} $${tfrAmount} succsesfully. Your remaining balance is $${accounts[payeeIndex].currentBal} `);

}
