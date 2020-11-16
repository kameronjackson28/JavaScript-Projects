function my_Dictionary() { //This creates a dictionary with keys and values//
    var Animal = {
        Species: "Dog",
        Color: "Brown",
        Breed: "Labrador",
        Age:3,
        Sound:"Snore"
    };
    delete Animal.Breed;//This deletes the value making the output "undefined"//
    document.getElementById("Dictionary").innerHTML = Animal.Breed;
}