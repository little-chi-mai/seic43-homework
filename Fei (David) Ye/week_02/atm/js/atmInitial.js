// code successful but before refactoring

// $(document).ready(function () {
//     $("#checking-balance").css("background-color", `red`);
//     $("#savings-balance").css("background-color", `red`);
  
//     $("#checking-deposit").on("click", function () {
//       let checkingBalance =
//         $("#checking-balance").text().split("").slice(1).join("") - 0;
//       let checkingDepositAmount = $("#checking-amount").val() - 0;
//       checkingBalance += checkingDepositAmount;
//       $("#checking-balance").text(`$${Math.round(checkingBalance * 100) / 100}`);
//       $("#checking-amount").val("");
  
//       if ($("#checking-balance").text().split("").slice(1).join("") - 0 > 0) {
//         $("#checking-balance").css("background-color", `#E3E3E3`);
//       } else {
//         $("#checking-balance").css("background-color", `red`);
//       }
//     });
  
//     $("#checking-withdraw").on("click", function () {
//       let checkingBalance =
//         $("#checking-balance").text().split("").slice(1).join("") - 0;
//       let checkingWithdrawAmount = $("#checking-amount").val() - 0;
  
//       if (checkingBalance - checkingWithdrawAmount >= 0) {
//         checkingBalance -= checkingWithdrawAmount;
//       } else {
//         alert("not enough fund");
//       }
  
//       $("#checking-balance").text(`$${Math.round(checkingBalance * 100) / 100}`);
//       $("#checking-amount").val("");
  
//       if ($("#checking-balance").text().split("").slice(1).join("") - 0 > 0) {
//         $("#checking-balance").css("background-color", `#E3E3E3`);
//       } else {
//         $("#checking-balance").css("background-color", `red`);
//       }
//     });
  
//     $("#savings-deposit").on("click", function () {
//       let savingsBalance =
//         $("#savings-balance").text().split("").slice(1).join("") - 0;
//       let savingsDepositAmount = $("#savings-amount").val() - 0;
  
//       savingsBalance += savingsDepositAmount;
//       $("#savings-balance").text(`$${Math.round(savingsBalance * 100) / 100}`);
//       $("#savings-amount").val("");
  
//       if ($("#savings-balance").text().split("").slice(1).join("") - 0 > 0) {
//         $("#savings-balance").css("background-color", `#E3E3E3`);
//       } else {
//         $("#savings-balance").css("background-color", `red`);
//       }
//     });
  
//     $("#savings-withdraw").on("click", function () {
//       let savingsBalance =
//         $("#savings-balance").text().split("").slice(1).join("") - 0;
//       let savingsWithdrawAmount = $("#savings-amount").val() - 0;
  
//       if (savingsBalance - savingsWithdrawAmount >= 0) {
//         savingsBalance -= savingsWithdrawAmount;
//       } else {
//         alert("not enough fund");
//       }
  
//       $("#savings-balance").text(`$${Math.round(savingsBalance * 100) / 100}`);
//       $("#savings-amount").val("");
  
//       if ($("#savings-balance").text().split("").slice(1).join("") - 0 > 0) {
//         $("#savings-balance").css("background-color", `#E3E3E3`);
//       } else {
//         $("#savings-balance").css("background-color", `red`);
//       }
//     });
//   });
  