
var taille =parseInt(prompt("Veuillez entrer le nombre de cellules de votre tableau"));
var tableau = Array;
var i = 0;
var C=0;

    var tableau = Array();

        for (i=0;i<taille;i++){
            C=prompt("Veuillez entrer votre valeur : ");
            tableau.push(C);
        }

console.log("Le tableau que vous avez renseigné est : " + tableau);
document.write("Le tableau que vous avez renseigné est : " + tableau);

var nb =tableau.length;
console.log("la taille du tableau est : " + nb);
