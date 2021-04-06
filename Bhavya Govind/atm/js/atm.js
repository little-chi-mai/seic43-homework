
$(document).ready(function(){
// Accessing inputs and value in the  checking account
    const checkingAcc = {
        accountBalance: $('div.balance#checking-balance'),
        inputAmount : $('#checking-amount'),
        dpstBtn : $(':button#checking-deposit').click(function(){
            var depositAmount = parseInt(checkingAcc.inputAmount.val());
            let currentBalance = checkingAcc.accountBalance.text();
            currentBalance = parseInt(currentBalance.replace('$',''));
            currentBalance = currentBalance + depositAmount;
            checkingAcc.accountBalance.text('$' + currentBalance);
        }),
        wthdrwBtn : $(':button#checking-withdraw').click(function(){
            var withdrawAmount = checkingAcc.inputAmount.val();
            let currentBalance = checkingAcc.accountBalance.text().replace('$','');
            let savingsBalance = savingsAcc.accountBalance.text().replace('$','');
            let result =  withdraw(currentBalance,savingsBalance,withdrawAmount);
            changeBackground(result[0],result[1]);
            if(result){
                checkingAcc.accountBalance.text('$' + result[0]); 
                savingsAcc.accountBalance.text('$' + result[1]);
            }
            
        })
    };

    // Accessing inputs and value in the  checking account
    const savingsAcc = {
        accountBalance: $('div.balance#savings-balance'),
        inputAmount : $('#savings-amount'),
        deposit : $(':button#savings-deposit').click(function(){
            var transferAmount = parseInt(savingsAcc.inputAmount.val());
            let currentBal = savingsAcc.accountBalance.text();
            currentBal = parseInt(currentBal.replace('$','')) + transferAmount;
            savingsAcc.accountBalance.text('$' + currentBal);
        }),
        withdraw : $(':button#savings-withdraw').click(function(){
            var withdrawAmount = savingsAcc.inputAmount.val();
            let savingsBalance = savingsAcc.accountBalance.text().replace('$','');
            let checkingBlance =  checkingAcc.accountBalance.text().replace('$','');
            let result =  withdraw(savingsBalance,checkingBlance,withdrawAmount);
            changeBackground(result[0],result[1]);
            if(result){
                savingsAcc.accountBalance.text('$' + result[0]); 
                checkingAcc.accountBalance.text('$' + result[1]);
            }
            

        })
    };

    function withdraw(balance1,balance2,withdrawAmount){
        let total =  parseInt(balance1) + parseInt(balance2);
        withdrawAmount = parseInt(withdrawAmount);
            if(total !== 0 && total >= withdrawAmount){
                if(balance1 >= withdrawAmount){
                    balance1 = balance1 - withdrawAmount;
                }else if(balance1 !== 0 &&  withdrawAmount > balance1){
                    let stagingAmount = withdrawAmount - balance1;
                    balance2 = balance2 - stagingAmount;
                    balance1 = withdrawAmount - stagingAmount - balance1;
                }else{
                    balance2 = balance2 - withdrawAmount;
                }
               return [balance1,balance2]; 
            }else{
                alert('Insufficient funds amount cannot be withdrawn.');
            }
            
    }
    function changeBackground(balance1,balance2){
        console.log(balance1,balance2);
        if(balance1 === 0){
          $('div.balance#checking-balance').addClass('zero').removeClass('balance');
        }
        if(balance2 === 0){
            $('div.balance#savings-balance').addClass('zero').removeClass('balance');
        }
    }
});
 