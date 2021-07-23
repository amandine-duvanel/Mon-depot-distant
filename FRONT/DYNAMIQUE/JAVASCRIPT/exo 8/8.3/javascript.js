
// saisie des entiers et en affiche la somme et la moyenne, fin de la saisie à 0
// les utilisateurs rrentrent successivements des chiffres, 
// jusqu'à ce qu'ils mettent 0 pour stopper VOLONTAIREMENT le programme . On affiche les résultats seulement, de somme et moyenne 

var C;
var somme = 0;
var moyenne = 0;
var i = 0;

while (C!=0) {
    // somme 
    var C = parseInt(prompt("veuillez saisir un nombre entier\n [On arrête la saisie lorsque 0 est entré.]"));
    somme = somme+C;

    //nombre de tours
    i = i + 1;

    //moyenne
    moyenne = somme/(i-1);

}
alert("la somme de votre saisie est : "+ somme);
alert('La moyenne de votre saisie est : ' + moyenne);