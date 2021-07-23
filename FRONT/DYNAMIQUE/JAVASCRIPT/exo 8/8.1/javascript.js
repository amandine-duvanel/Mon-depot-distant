// demander un prénom indifiniment, puis afficher le nombre de prénoms saisis et les afficher aussi

var prenom;
var i=1;

console.log("les prénoms en folie")

//dans l'ordre : la premiere action à faire, puis l'actualisation du "i" (incrémentation),
//  puis la commande pour sauvegarder le nom de ce tour précis dans la console, sinon oubliera

do
{
    var prenom=prompt("Saisissez le prénom N°1\n Ou Clic sur Annuler pour arrêter la saisie.");
    i = i+1;
    console.log("vous avez rentré " + prenom);
}
while(prenom)
console.log('Nombre de prénoms écrits :' + (i-2));

// le while permet de stoper la boucle quand le prompt n'est pas rentré, soit validé !(true)