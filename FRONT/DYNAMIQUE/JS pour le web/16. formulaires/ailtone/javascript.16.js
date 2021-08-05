/* Affiche le projet dans la textarea*/
function affiche_projet() {
    var projet = document.getElementById("projet").value;
    document.getElementById("text_projet").innerHTML += projet + " ";

}

var formCoordonees = document.getElementById("formulaire");

function valider(event) {
    // code a exécuter lorsque le formulaire sera validé
    var cp = formCoordonees.elements["Code-Postal"];
    var email = formCoordonees.elements["Email"];
    var societe = formCoordonees.elements["Societé"]; 
    var contact = formCoordonees.elements["Contact"];
    var ville = formCoordonees.elements["Ville"];

    // ****Validation Email**** //
    var regex = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/;
    if (regex.exec(email.value) == null) {
        erreur = "Entrez un email valable s.v.p. !";
    }

    // ****Validation Ville**** //
    if (ville.value == "") {
        erreur = "Entrez le nom de la ville s.v.p. !";
    }

    // ****Validation Code Postal**** //
    // si le champ ne contient pas 5 caractères OU //
    // si il n'est pas composé que de nombres //
    if (cp.value.length != 5 || isNaN(cp.value)) {
        erreur = "Entrez le code postal sur 5 chiffres s.v.p. !.";
    }

    // ****Validation Contact**** //
    if (contact.value == "") {
        erreur = "Entrez le nom de la personne à contacter s.v.p. !";
    }

    // ****Validation Societé**** //
    if (societe.value == "") {
        erreur = "Entrez le nom de la societé s.v.p. !";
    }

    if (erreur) {
        event.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
    }

}

/* ajoute l’événement */
formCoordonees.addEventListener('submit', valider);