function Addition_Function() {
    var Addition = 2 + 2;
    document.getElementById("Math").innerHTML= "2 + 2 =" + Addition;
} //This function makes the addition live when you click the button//

function sub_function() {
    var subtraction = 10 - 9;
    document.getElementById("subtract").innerHTML= "10 - 9 =" + subtraction;
}//This function makes the subtraction live when you click the button//

function mult_function() {
    var simple_Math = 78 * 45;
    document.getElementById("multiply").innerHTML= "78 * 45 =" + simple_Math;
}//This function makes the multiplication live when you click the button//


function division() {
    var simple_Math = 54 / 85;
    document.getElementById("divide").innerHTML = " 54 / 85 = " + simple_Math;
}//This function makes the division live when you click the button//

function more_math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("moremath").innerHTML = "(1 + 2) * 10 / 2 - 5 = " + simple_Math;
}//This function makes multiple equations live when you click the button//

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("mod").innerHTML = "25 % 6:" + simple_Math;    
}//This function makes the modulus equation live when you click the button//

function negation_Operator() {
    var y = 55;
    document.getElementById("Neg").innerHTML = -y;
}//this function makes the number display as a negative number//

var X = 5.25;
X--;
document.write(X);
//this function is a decrement operator making the display 4.25//


var X = 5;
X++;
document.write(X);
//this is an increment operator making the display 6//
window.alert(Math.random(),+ 100);
//this is an alert making a random number alert.//
