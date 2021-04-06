$(document).ready(function() {

  let checkingTotal = 0.00;
  let savingsTotal = 0.00;
    //checkingTotal.toFixed(2);
    //savingsTotal.toFixed(2);

  let turnRed = function(element, checkForZero) {
    const parsed = parseFloat(checkForZero.toFixed(2));
    console.log(parsed);//looks for zero from any balance
    if (parsed === 0) {
      $(element).addClass("zero");//sets balance classes to red
    }
  };

    //Checking and Saving deposit additions
  $("#checking-deposit").on("click", function(){
    let checkingInput = parseFloat($("#checking-amount").val(), 10)|| 0; //store input field to a number
    checkingTotal += checkingInput;//add the field value
    $("#checking-balance").removeClass("zero").text("$" + checkingTotal.toFixed(2));//remove class for any addition
  })

  $("#savings-deposit").on("click", function(){
    let savingsInput = parseFloat($("#savings-amount").val(), 10) || 0; //store input field to a number
    savingsTotal += savingsInput;//add the field value
    $("#savings-balance").removeClass("zero").text("$" + savingsTotal.toFixed(2));//remove class for any addition
  })

  //Checking withdrawals
  $("#checking-withdraw").on("click", function() {
    let checkingInput = parseFloat($("#checking-amount").val(), 10) || 0;//store input field to a number

    let combinedAccTotal = (checkingTotal + savingsTotal);//combined account total
        combinedAccTotal.toFixed(2);
        checkingTotal.toFixed(2);
        savingsTotal.toFixed(2);


    if (checkingTotal >= checkingInput) {
        checkingTotal -= checkingInput;//subtract the field value
        checkRound = checkingTotal.toFixed(2);
        $("#checking-balance").text("$" + checkRound);

    } else if (savingsTotal >= checkingInput) {
      savingsTotal -= checkingInput;//subtract the field value
      savingsRound = savingsTotal.toFixed(2);
      $("#savings-balance").text("$" + savingsRound);

      // For Checking- This part compares combined account $ to = the input $, which then allows value to withdraw
    } else if ((checkingInput > checkingTotal) &&
      (checkingInput > savingsTotal) &&
      (checkingInput <= combinedAccTotal)) {
        checkingInput = checkingInput - checkingTotal;
        savingsTotal = savingsTotal - checkingInput;
        savingsRound = savingsTotal.toFixed(2);
        checkingTotal = 0;
        $("#checking-balance").text("$" + checkingTotal.toFixed(2));
        $("#savings-balance").text("$" + savingsRound);
      }

    turnRed("#checking-balance", checkingTotal);//pass values from checking to 0 balance value function
    turnRed("#savings-balance", savingsTotal);//pass values from savings to 0 balance value function

    });

  //Savings withdrawals
  $("#savings-withdraw").on("click", function() {
    let savingsInput = parseFloat($("#savings-amount").val(), 10) || 0; //store input field to a number
    let combinedAccTotal = (checkingTotal + savingsTotal);
        combinedAccTotal.toFixed(2);
        checkingTotal.toFixed(2);
        savingsTotal.toFixed(2);

    if (savingsTotal >= savingsInput) {
      savingsTotal -= savingsInput;//subtract the field value
      savingsRound = savingsTotal.toFixed(2);
      $("#savings-balance").text("$" + savingsRound)

    } else if (checkingTotal >= savingsInput) {
      checkingTotal -= savingsInput;//subtract the field value
      checkRound = checkingTotal.toFixed(2);
      $("#checking-balance").text("$" + checkRound)

    } else if ((savingsInput > savingsTotal) &&
      (savingsInput > checkingTotal) &&
      (savingsInput <= combinedAccTotal)) {
        savingsInput = savingsInput - savingsTotal;
        checkingTotal = checkingTotal - savingsInput;
        checkRound = checkingTotal.toFixed(2);
        savingsTotal = 0;
        $("#checking-balance").text("$" + checkRound);
        $("#savings-balance").text("$" + savingsTotal.toFixed(2));
      }

    turnRed("#checking-balance", checkingTotal);//pass values from checking to 0 balance value function
    turnRed("#savings-balance", savingsTotal);//pass values from savings to 0 balance value function

    });

    return turnRed;

});
