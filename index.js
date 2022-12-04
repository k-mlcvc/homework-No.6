// Deklariraj varijablu myString i spremi u nju neki string.
// Uzmi sve znakove od 5. znaka pa do 10. znaka ne ukljucujuci 10. znak.
// Ako je duljina stringa manja od 5. ispisi: Krace od 5!
// Ako je string prazan ispisi: Prazan string!
// Ako je duljina stringa 5 ispisi te znakove

var myString = "Neki string";
var subStr = (myString.substring(5,10));

if (subStr.length === 0) {
    console.log("Prazan string!");
} else if (subStr.length < 5) {
    console.log ("Kraće od 5!");
} else if (subStr.length === 5) {
    console.log(subStr);
}


if (subStr.length < 5 && subStr.length !== 0) {
    console.log ("Kraće od 5!");
} else if (subStr.length === 0) {
    console.log("Prazan string!");
} else if (subStr.length === 5) {
    console.log(subStr);
}

// ILI
if (subStr.length < 5 && subStr.length != 0) {
    console.log ("Kraće od 5!");
} else if (subStr === "") {
    console.log("Prazan string!");
} else if (subStr.length === 5) {
    console.log(subStr);
}