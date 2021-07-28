// faut il déclarer tableau en globale ?

var max = 0;
var moyenne = 0;
var size = 0;
var saisie;

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

//SaisieTab = saisie des différents posts du tableau
function SaisieTab() {
    for (var i = 0; i < taille; i++) {
        tableau[i] = parseInt(prompt('Veuillez entrer un post : '));
    }
}

// AfficheTab = afficher tous les posts du tab
function AfficheTab() {

    for (var i = 0; i < taille; i++) {
        num = i + 1
        document.write("Le poste N° " + num + " correspond à : " + tableau[i] + "</br>");
    }
}

// RechercheTab afficher le contenu d'un post dont le rang est saisie au clavier
function RechercheTab() {
    var selection = parseInt(prompt("veuillez entrer le rang de la cellule que vous voulez voir"));
    if (selection < tableau.length) {
        document.write("</br> La cellule au rang " + selection + " est : " + tableau[selection]);
    } else {
        alert("L'indice est supérieur au nombre de cellules renseignés !");
        selection = parseInt(prompt("Veuillez rentrer un autre rang"));
    }
}

//InfoTab affiche le max et la moyenne des postes
function InfoTab() {
    var somme = 0;
    for (var j = 0; j < tableau.length; j++) {
        somme = somme + tableau[j];
    }
    moyenne = somme / tableau.length
    document.write("</br> La moyenne des posts est : " + moyenne);
    document.write(" </br> Le chiffre maximum du tableau est : " + Math.max(...tableau));
}

//GetInteger();
InitTab();
SaisieTab();
AfficheTab();
RechercheTab();
InfoTab();

