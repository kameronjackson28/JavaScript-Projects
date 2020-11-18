var X= 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();//above function uses global scope to display 30 and 110//

function Add_numbers_3() {
    var Z = 30;
    document.write(20 + Z + "<br>");
}

function Add_number_4() {
    document.write(Z + 100);
    }
Add_numbers_3();
Add_number_4();//above function uses local scope to display 30//

function Add_numbers_5() {
    var y= 20;
    console.log(15 + Y);
}
function Add_numbers_6 () {
    console.log(Y + 100);
}
Add_numbers_5();
Add_numbers_6();//uses console.log to debug issues//

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}//uses if statement to return greeting before 6p local time//

function get_Greeting() {
    if (new Date().getHours() < 24) {
        document.getElementById("Hello").innerHTML= "time to get to bed!";
    }
}//uses if statement to again return greeting if before midnight local time//

function Age_function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vape ="You can buy vape products!";
    }
    else {
        Vape ="You cannot buy vape products!";
    }
    document.getElementById("age_by_number").innerHTML= Vape;
}//uses if else statement to calculate whether user can buy vape products or not//

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is evening time.";
    }
    else {
        Reply ="It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}//Uses else if statement to pull time of day and create return based on that time//

