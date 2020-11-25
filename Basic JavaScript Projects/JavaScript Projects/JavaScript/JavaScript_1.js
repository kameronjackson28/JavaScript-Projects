function Artist_Function() {
    var Artist_Output;
    var Artist = document.getElementById("Color_Input").value;
    var Artist_String= "is an amazing artist!";
    switch(Artist) {
        case "Luke Combs": "Luke Combs" + Artist_String;
        break;
        case "George Strait": "George Strait" + Artist_String;
        break;
        case "Johnny Cash": "Johnny Cash" + Artist_String;
        break;
        case "Clay Walker": "Clay Walker" + Artist_String;
        break;
        case "Conway Twitty": "Conway Twitty" + Artist_String;
        break;
        case "Jerry Lee Lewis": "Jerry Lee Lewis" + Artist_String;
        break;
        default:
            Artist_Output = "Please enter a musician exactly as written on the above list."
    }
    document.getElementById("Output").innerHTML=Artist_Output;

    }


function Hello_World_Function() {
    var A=document.getElementsByClassName("Click");
    A[0].innerHTML="The text has changed!";
}

