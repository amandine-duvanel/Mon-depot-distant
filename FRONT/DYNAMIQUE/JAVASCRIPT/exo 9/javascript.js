//2 fonctions à créer
//produit(x, y) qui retourne le produit des 2 variables x, y passées en paramètre.
//afficheImg(image) qui affiche l'image passée en paramètre. ( Le paramètre image corresond au chemin de votre image )

//on demande un nombre, puis son multiplicateur
//on affiche le cube et le produit, avec l'image papillon

X = prompt("Entrez un nombre");
Y = prompt("Entrez un mulitplicateur");

var resultat1;
var resultat2;

function afficheImg(src){
    document.write(src);
}
afficheImg("<img src='papillon.jpg'>");

function cube(X){
    resultat1 = X*X*X;
    document.write(resultat1);
}

//function cube(X,Y){

//    resultat1 = X*X*X;
//}
