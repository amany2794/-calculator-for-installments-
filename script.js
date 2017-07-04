var totalPrice;
var interest;
var interestValue;



var interestPerYear;
var noYears;
var interestPerMonth



var totalPayment

totalPrice = Number(prompt("enter total price") );
interest =Number(prompt( "enter interest rate") );

interestValue= ( totalPrice * interest) / 100;
alert( interestValue );

noYears =  Number (prompt(" enter number of years"));







interestPerYear = interestValue/noYears;

alert( "you should pay annually  " + interestPerYear + "LE.");

interestPerMonth = interestPerYear/12;


 alert ( "you should pay monthly " + interestPerMonth + "LE.");

totalPayment=totalPrice + interestValue ;

alert("then total price after adding interest =" + totalPayment + "LE.");










