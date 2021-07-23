
// saisie des entiers et en affiche la somme et la moyenne, fin de la saisie à 0
// les utilisateurs rrentrent successivements des chiffres, 
// jusqu'à ce qu'ils mettent 0 pour stopper VOLONTAIREMENT le programme . On affiche les résultats seulement, de somme et moyenne 

var X = prompt("Veuillez saisir un nombre entier à multiplier : ");
var N = prompt("Veuillez saisir le nombre de fois qu'il sera multiplié : ");
var resultat = 0;
var i=0

for(i=0; i<=N; i=i+1)
{
resultat= i*X;
document.write(+i+" x " +X+ " = " +resultat +" </br>");
}

