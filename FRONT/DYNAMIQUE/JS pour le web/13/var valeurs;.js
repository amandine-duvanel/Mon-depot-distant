var valeurs;
var moyenne = 0;
var somme = 0;
var i = 0;
var tableau = new Array();


while (valeurs != 0) {
    valeurs = parseInt(prompt("Veuillez saisir un nombre. \n Entrez 0 pour arreter la saisie."));


    var val = tableau.push(valeurs);


    somme = somme + valeurs;

    i++; 
    moyenne = somme / (i - 1) ;
}

console.log(tableau);


// document.write('Vous avez saisie ' + (i - 1) + ' nombre(s).' + '</br>'+ " La somme est :  " + somme + '<br>');
document.write('Vous avez saisie ' + (val-1) + ' nombre(s).' + '</br>'+ " La somme est :  " + somme + '<br>');

console.log(" La somme est :  " + somme);
document.write(" La moyenne est :  " + moyenne);
console.log(" La moyenne est :  " + moyenne);