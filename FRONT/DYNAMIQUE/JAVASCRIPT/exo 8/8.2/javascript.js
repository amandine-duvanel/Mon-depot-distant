// afficher les entiers inférieurs à N

var N =prompt('veuillez saisir un nombre entier positif');

while (N>0) {
    
    console.log("L'entier précédent est : " + (N-1));
    N = N - 1;
}
