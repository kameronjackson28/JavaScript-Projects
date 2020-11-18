document.write(typeof "list");//displays string//
document.write(typeof 55);//displays numbere since it's a number//

function my_function() {
    document.getElementById("Test").innerHTML = isNaN('This is a string');
}//Displays true because this is not a number//

function NaN_function() {
    document.getElementById("NaN").innerHTML = isNaN(8+5);//Outputs false because this is a number//
}

function infinity_function() {
    document.write(2E359);
    document.getElementById("infinity").innerHTML =(2E359);//Identifies the number is infinity//
}

function neginfinity_function() {
    document.write(-5E637);
    document.getElementById("neginfinity") =(-5E637);//Outputs negative infinity//
}


document.write(10>2);//Using Boolean creates true or false//
document.write(10<2);//Using Boolean creates true or false//
console.log(15 + 15);//Adds the equation, sending the output to the console//
document.write("105" + 503);//This adds both values together//
document.write(15==3);//Creates an output of false since the values aren't equal//
document.write(10==10);//Creates an output of true since values are equal//
DateOfBirth1 = 1/2/1985;//Data used for the 3 equals//
DateOfBirth2 = 1/3/1986;//Data used for the 3 equals//
document.write(DateOfBirth1 === DateOfBirth2);//Puts an output of false since the values aren't the same//
document.write(5 > 2 && 10 > 4);//Uses Boolean logical operator AND to determine the logic between two variables//
document.write(5 > 10 && 10 > 4); //Uses Boolean logical operator AND to return false//
document.write(5 > 10 || 10 > 4);//Uses Boolean logical operator OR to return true based on the values//
document.write(5 > 10 || 10> 20);//Uses Boolean logical operator OR to return false based on the values//
function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}//Uses Boolean logical operator NOT to return false//
function true_function() {
    document.getElementById("true").innerHTML = !(5 > 10);
}//Uses Boolean logical operator NOT to return true//