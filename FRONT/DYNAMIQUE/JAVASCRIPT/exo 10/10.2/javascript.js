//GetInteger = lire un entier au clavier
// demande a l' utilisateur combien de cases dans le tableau

function GetInteger(){

    var size = parseint(prompt("nombre d'entrées dans le tableau ?"));
    if( !isNaN(size) && (size > 0) ){
        return size;
    } else return;
}

//IniTab = pour créer et initialiser l'instance de tableau (nmbr post saisis au clavier)

//return un tableau de la taille size
function InitTab(taille){
    var size = parseInt(taille);
    if( !isNaN(size) && (size > 0)){
       var tableau = new Array(size);
        return tableau;
    } else return;

//SaisieTab = saisie des différents posts du tableau

// AfficheTab = affciher tous les posts du tab

// RechercheTab afficher le contenu d'un post dont le rang est saisie au clavier

//InfoTab affiche le max et la moyenne des postes

