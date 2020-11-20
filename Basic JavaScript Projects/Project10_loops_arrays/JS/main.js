function Call_Loop() {
    var Digit = "";
    var X=1;
    while(X<11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}//Uses "while" function to output 1-10//

var str=new String("This is a string");
document.write("str.length is:" + str.length);//string length property returning number of characters in string//

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content="";
var Y;
function for_Loop() {
    for(Y = 0; Y<Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}//Uses a "for" loop to display all items listed//

function array_Function() {
    var Dog_Picture = [];
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "barking";
    document.getElementById("Array").innerHTML="In this picture, the dog is" +
        Dog_Picture[2] + ".";
}//Array displaying index 2 to display the property of the object(Dog)//

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"red"};
    Musical_Instrument.color ="yellow";
    Musical_Instrument.price ="$1000";
    document.getElementById("Constant").innerHTML ="The color of the"+
    Musical_Instrument.brand +"was" + Musical_Instrument.color;
}//constant to display multiple descriptions of the same identifier//

let house = {
    model: "Arcadian",
    year: "1986",
    color: "white",
    description: function() {
        return "The house is a" + this.year + this.color + this.model;
    }
};
document.getElementById("House_Object").innerHTML= house.description();

//uses "let" to give a description of the properties of the object(house)//