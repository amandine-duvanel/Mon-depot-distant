// demande âges successifs > avec des prompt 
// boucle qui s'arrete APRES un chiffre >= 100 > boucle do...while 

// incrémenter le nombre avec une variable, qu'on affiche à la fin

// Déclaration des variables
var age;
var nbrJeunes = 0;
var nbrMoyens = 0;
var nbrVieux = 0;

// Boucle do...while qui demande l'âge, incrémente selon, et stop à 100
do{
    age = parseInt(prompt("Veuillez saisir un âge. </br> La saisie s'arrête après le premier centenaire."));
    console.log(age);

    if(age<20){
        nbrJeunes++;
    }

    if (age>=20 && age<=40){
        nbrMoyens ++;
    }

    if(age>40){
    nbrVieux ++;
    }

} while(age<100);

// affichage du résultat
document.write("Il y a " + nbrJeunes + " personne(s) de moins de 20 ans. </br>");
console.log("Il y a " + nbrJeunes + " personne(s) de moins de 20 ans. ");

document.write("Il y a " + nbrMoyens + " personne(s) ayant entre 20 et 40 ans.</br>");
console.log("Il y a " + nbrMoyens + " personne(s) ayant entre 20 et 40 ans.");

document.write("Il y a " + nbrVieux + " personne(s) de plus de 40 ans.</br>");
console.log("Il y a " + nbrVieux + " personne(s) de plus de 40 ans.");