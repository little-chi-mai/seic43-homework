// # JavaScript Bank

// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write.

// #### Bank

// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// #### Accounts

// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

const bank = {
  addAccount: function (newUserName) {
    bank.accounts.push({ name: newUserName, balance: 0 });
  },
  sumAllBalance: function () {
    let sum = 0;
    for (let i = 0; i < bank.accounts.length; i++) {
      sum += bank["accounts"][i].balance;
    }
    return sum;
  },
  accounts: [],
  deposit: function (depositName, amount) {
    for (let i = 0; i < bank.accounts.length; i++) {
      if (bank["accounts"][i].name === depositName) {
        bank["accounts"][i].balance += amount;
      }
    }
  },
  withdraw: function (withdrawName, amount) {
    for (let i = 0; i < bank.accounts.length; i++) {
        if (bank["accounts"][i].name === withdrawName) {
          if((bank["accounts"][i].balance - amount)>=0){
            bank["accounts"][i].balance -= amount;
          } else {
              console.log('Withdraw failed, no enough balance')
          }
        }
    }
  },
};

bank.addAccount("Tom");
console.log(bank.accounts);

bank.addAccount("Marry");
console.log(bank.accounts);

console.log(bank.sumAllBalance());

bank.deposit('Tom',100);
console.log(bank.accounts);

bank.deposit('Marry',200);
console.log(bank.accounts);

console.log(bank.sumAllBalance());

bank.withdraw('Tom',50);
console.log(bank.accounts);

bank.withdraw('Marry',300);
console.log(bank.accounts);



// ### Tips

// Don't overthink this. Shorter code is probably the answer.

// ## Bonus

// - Ensure that the accounts cannot have negative values.
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

// ## Additional

// Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them.
