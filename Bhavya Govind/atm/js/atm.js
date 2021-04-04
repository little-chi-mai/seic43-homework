
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
            let savingsBalance = savingsAcc.checkBal.text().replace('$','');
            let result =  withdraw(currentBalance,savingsBalance,withdrawAmount);
            if(result){
                checkingAcc.accountBalance.text('$' + result[0]); 
                savingsAcc.checkBal.text('$' + result[1]);
            }
        })
    };

    // Accessing inputs and value in the  checking account
    const savingsAcc = {
        checkBal: $('div.balance#savings-balance'),
        amount : $('#savings-amount'),
        dpstBtn : $(':button#savings-deposit').click(function(){
            var transferAmount = parseInt(savingsAcc.amount.val());
            let currentBal = savingsAcc.checkBal.text();
            currentBal = parseInt(currentBal.replace('$','')) + transferAmount;
            savingsAcc.checkBal.text('$' + currentBal);
        }),
        wthdrwBtn : $(':button#savings-withdraw').click(function(){
            var transferAmount = parseInt(savingsAcc.amount.val());
            let currentBal = savingsAcc.checkBal.text();
            currentBal = parseInt(currentBal.replace('$',''))
            if(currentBal !== 0 && currentBal > transferAmount){
                currentBal = currentBal - transferAmount;
            }else{
                
            }
            savingsAcc.checkBal.text('$' + currentBal);

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
});
 