function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride +  "to ride.";
}//Uses ternary operator to make a return based on user's input(Height)//

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote=(Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("vote").innerHTML = Can_vote + "to vote.";
}//Uses ternary operator to determine whether user is old enough to vote based upon input(Age)//

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year =Year;
    this.Vehicle_Color=Color;
}
var Jack= new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myfunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a" + Erik.Vehicle_Color + "-colored" +Erik.Vehicle_Model +
    "manufactured in" + Erik.Vehicle_Year;
}//Uses keywords and constructors to make return based on the code//


function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year =Year;
    this.Vehicle_Color=Color;
}
var Jack= new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function newfunction() {
    document.getElementById("New_and_This").innerHTML =
    "Emily drives a" + Emily.Vehicle_Color + "-colored" +Emily.Vehicle_Model +
    "manufactured in" + Emily.Vehicle_Year;
}//Uses a new keyword to make a new return based on information updated//

function Nested_function() {
    document.getElementById("Nested_function").innerHTML = Count();
    function Count(){
    var Starting_point = 9;
    function Plus_one() {Starting_point +=1}
    Plus_one();
    return Starting_point;
    }
}//uses nested function to count making output 10//