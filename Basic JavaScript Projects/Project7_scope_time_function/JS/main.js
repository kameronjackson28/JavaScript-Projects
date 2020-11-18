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
    var X = 10;
    document.write(20 + X + "<br>");
}

function Add_number_4() {
    document.write(X + 100);
    }
Add_numbers_3();
Add_number_4();//above function uses local scope to display 30//

function Add_numbers_5() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_6 () {
    console.log(X + 100);
}
Add_numbers_5();
Add_numbers_6();
