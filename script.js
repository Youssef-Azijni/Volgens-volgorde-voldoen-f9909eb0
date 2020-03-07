// const frankrijkCapital = "Parijs";
// const spinBeentjes = 8;
// const bigLake = "het Ijsselmeer";

const Array= [
    "Parijs",
    8,
    "IJselmeer",
    ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"],
    ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"],
];

var antwoorden = ["Parijs", 8, "het Ijsselmeer", 4320];
var score = 0;

function script() {
    var Frankrijk = document.getElementById("COUNTRY").value;
    var lake = document.getElementById("lake").value;
    var spin = document.getElementById("spooder").value;
    var bombCode = document.getElementById("bombvest").value;
    var automerk = document.getElementById("automerk").value;
    var waddeneiland = document.getElementById("eiland").value;

    if (spin == antwoorden[1]) {
        score = score++;
    }
    if (Frankrijk == antwoorden[0]) {
        score = score++;
    }

    if (lake == antwoorden[2]) {
        score = score++
    }

    if (bombCode == antwoorden[3]) {
        score = score++
    }
    if (Array[4].includes(automerk)) {
        score = score++
    }
    if (Array[4].includes(waddeneiland)) {
        score = score++
    }
}
console.log(
    "    __.-._\n" +
    "    '-._\"7'\n" +
    "     /'.-c\n" +
    "     |  /T\n" +
    "snd _)_/LI");
console.log("not the answers, what you find here");

    if (score <=3) {
    document.getElementById("slechtgedaan").innerHTML = "Goed gedaan, een dorpsoudere met een ongelofelijke hoeveelheid wereldkennis die hij zou kunnen delen met de nieuwere generate is gestorven, die nieuwe generatie ook."
    document.getElementById("slechtgedaan2").innerHTML = "Jouw score is: " + score + "van de 4"
    }

    if (score == 4) {
    document.getElementById("goedgedaan").innerHTML = "de dorpskinderen zijn velig."
    document.getElementById("goedgedaan2").innerHTML = "Je score is: " + punten + "van de 4."
    }