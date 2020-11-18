function full_sentence() {
    var part_1 = "I have";
    var part_2 = "made this";
    var part_3= "into a complete";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML=whole_sentence;
}//connects the variables to make a complete sentence//

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}//uses slice() method to extract a section of a string and returns the extracted section//

function string_Method() {
    var X= 182;
    document.getElementById("Numbers_to_string").innerHTML=X.toString();
}//uses string method to return var x//

function precision_Method() {
    var Y= 12946.3012987376112;
    document.getElementById("Precision").innerHTML=Y.toPrecision(10);
}//uses toPrecision method to format a number to a specified length(10)//

