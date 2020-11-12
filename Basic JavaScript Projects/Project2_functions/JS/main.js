function My_First_Function() {
    var str = "This text is green";
    var result = str.fontcolor("Green");
    document.getElementById("Green_Text") .innerHTML=result;
}//This uses ElementbyId to make the button function text green//

function myFunction() {
    var sentence = "I am learning" ;
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}//This uses ElementbyId to make the words change when clicked//