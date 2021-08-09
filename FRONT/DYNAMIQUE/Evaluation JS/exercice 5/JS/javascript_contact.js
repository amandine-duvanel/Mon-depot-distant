var formulaire = document.getElementById("formulaire_contact");

function valider(event) {
    // code a exécuter lorsque le formulaire sera validé

    var nom = formulaire.elements["nom"];
    var prenom = formulaire.elements["prenom"];
    var sexe ;
    var dateNaissance = formulaire.elements["dateN"];
    var codePostal = formulaire.elements["code_postal"];
    var email = formulaire.elements["email"];
    var sujet = formulaire.elements["sujet"];
    var question = formulaire.elements["textarea"];

    //validation nom
    if(nom.input ==""){
        document.getElementById("erreur1").innerHTML = "Veuillez remplir le champs avec votre nom";
        event.preventDefault();
    }
    var filtreNom = /^\S+[-]?[î ï é è]?$/ ;
    if (filtreNom.exec(nom.input) == false){
        document.getElementById("erreur1").innerHTML = "Veuillez entrer un nom valide";
        event.preventDefault();
    }
    if(filtreNom.exec(nom.input)==true){
        erreur1="C'est ok";
    }

}
//mettre d'abord condition vide, condition faux, et ok
//  document.getElementById("erreur").textContent = erreur;











    /* ajoute l’événement */
// formulaire.addEventListener('submit', valider)