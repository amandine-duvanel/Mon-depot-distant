//2 fonctions à créer
//produit(x, y) qui retourne le produit des 2 variables x, y passées en paramètre.
//afficheImg(image) qui affiche l'image passée en paramètre. ( Le paramètre image corresond au chemin de votre image )

//on demande un nombre, puis son multiplicateur
//on affiche l'image papillon, le cube et le produit,  

X = prompt("Entrez un nombre");
Y = prompt("Entrez un mulitplicateur");


function afficheImg(src){
    document.write(src);
}
afficheImg("<img src='papillon.jpg'>");

function cube(X){
    resultat1 = X*X*X;
    document.write("</br> Le cube de " + X +" est égal à "+ resultat1);
}
resultat1=cube(X);

function produit(X,Y){
    resultat2 = X*Y;
    document.write("</br> Le produit de " + X +' et de ' + Y + " est égal à "+ resultat2);
}

resultat2=produit(X,Y);

console.log("X vaut " + X);
console.log("Y vaut " + Y);
