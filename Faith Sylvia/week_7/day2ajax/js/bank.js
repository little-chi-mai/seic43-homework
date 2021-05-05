const banker = function () {
  $.ajax({
     headers: {
         'Authorization': //removed for security purposes - add back in if demoing - in bash profile
     },
     url: 'https://api.up.com.au/api/v1/accounts'
   }).done(function(info) {

    $('#checking-header').text(`${info["data"][0]["attributes"]["accountType"]} ACCOUNT`);
    $('#checking-balance').text(`Balance: $${info["data"][0]["attributes"]["balance"]["value"]} `);
    $('<span>').text(info["data"][0]["attributes"]["balance"]["currencyCode"]).appendTo('#checking-balance');

    $('#savings-header').text(info["data"][1]["attributes"]["accountType"]);
    $('#savings-balance').text(`$${info["data"][1]["attributes"]["balance"]["value"]} `);
    $('<span>').text(info["data"][1]["attributes"]["balance"]["currencyCode"]).appendTo('#savings-balance');
   });
}

const getTransactions = function () {
  $.ajax({
     headers: {
         'Authorization': //removed for security purposes - add back in if demoing - in bash profile
     },
     url: 'https://api.up.com.au/api/v1/transactions'
   }).done(function(info) {

     transactionArray=info["data"]

     transactionArray.forEach(function(transaction){

       const amount = (transaction["attributes"]["amount"]["value"]).toString()
       const description = transaction["attributes"]["description"].toString()

       $('#checking-transactions').append('<tr><td>' + description + '</td><td>' + amount + '</td></tr>');
     });
   });
}


$(document).ready(function () { //only wrap in whatever actually would load before the document is ready
  banker();
  getTransactions();
});
