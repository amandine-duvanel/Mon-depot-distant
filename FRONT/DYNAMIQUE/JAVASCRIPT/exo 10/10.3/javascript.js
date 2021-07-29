var max = 0;
var moyenne = 0;
var size = 0;
var saisie;
var tableau = Array;

//GetInteger = lire un entier au clavier = combien de cases dans le tableau ?

function GetInteger() {

    size = parseInt(prompt("nombre d'entrées dans le tableau ?"));

    if (Number.isInteger(size)) {
        return size;
    }
}
taille = GetInteger()

//IniTab = pour créer et initialiser l'instance de tableau (nmbr post saisis au clavier)

//return un tableau de la taille size
function InitTab() {

    tableau = new Array(taille);
    return tableau;
}
InitTab();


//SaisieTab = saisie des différents posts du tableau
function SaisieTab() {
    for (var i = 0; i < taille; i++) {
        tableau[i] = parseInt(prompt('Veuillez entrer un post : '));
    }
}
SaisieTab();


// AfficheTab = afficher tous les posts du tab
function AfficheTab() {

    for (var i = 0; i < taille; i++) {
        num = i + 1
        document.write("Le poste N° " + num + " correspond à : " + tableau[i] + "</br>");
    }
}

AfficheTab();

// tri à bulles
// utiliser while ou do...while ? > essai avec while

function tri(tableau){
    var condition;
    do{ 
        condition = false;
        for(var i = 0;i<tableau.length;i++) {
            if (tableau[i]>tableau[i+1]){
                    var stock = tableau[i];
                    tableau[i]=tableau[i+1];
                    tableau[i+1]=stock;
                    condition = true;
            }
        }
    }
    while (condition);
}

tri(tableau);
console.log(tableau);
document.write("le tableau trié : " + tableau)
