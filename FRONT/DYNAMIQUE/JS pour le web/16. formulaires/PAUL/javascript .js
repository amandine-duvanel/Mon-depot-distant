// Définition des variables
function valider(event) {
var societe = document.getElementById("societe");
var contact = document.getElementById("contact");
var adresse = document.getElementById("adresse");
var post = document.getElementById("code_postal");
var ville = document.getElementById("ville");
var mail = document.getElementById("email");
var telephone = document.getElementById("telephone");
var environnement = document.getElementById("environnement");
var coordonnees = document.getElementById("form");
}

// Fin def variables


// Expressions régulières

// Pour les Entreprises
var filtre1 = new RegExp("^[a-zA-Z-\d]*$");
// Pour les chaînes de caractères classiques
var filtre2 = new RegExp("^[a-zA-Z]*$");
// Pour le Code Postal
var filtre3 = new RegExp("^[\d]*(5)$");
// Pour l'Email
var filtre4 = new RegExp("/^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/");
// Pour le numéro de téléphone
var filtre5 = new RegExp("^0[\d]{9}$");
// Pour les textarea
var filtre6 = new RegExp("^[a-zA-Z-\d]*$");

//Fin def RegEx
if (filtre4.exec(mail.value) == null) {
    erreur = "Entrez un email valable s.v.p. !";
}

// document.getElementById("form").addEventListener("submit", function () {
//         if (societe != filtre1) {
//             alert("Veuillez rentrer un nom d'entreprise valide")
//         }
//         if (contact != filtre2) {
//             alert("Veuillez rentrer un prénom valide")
//         }
//         if (adresse != filtre1) {
//             alert("Veuillez rentrer une adresse valide")
//         }
//         if (post != filtre3) {
//             alert("Veuillez rentrer une code postal valide")
//         }
//         if (ville != filtre2) {
//             alert("Veuillez rentrer un nom de ville valide")
//         }
//         if (mail != filtre4) {
//             alert("Veuillez rentrer une adresse mail valide")
//         }
//         if (telephone != filtre5) {
//             alert("Veuillez rentrer un numéro de téléphone valide")
//         }
//     }

// )
=======
//Affiche le projet dans la textarea
function affich_projet() {
    var projet = document.getElementById("project").value;
    document.getElementById("text_project").innerHTML += projet + " ";

}

var formCoordonees = document.getElementById("form");

function valider(event) {
    // code a exécuter lorsque le formulaire sera validé
    var codep = document.getElementById("code_postal");
    var email = document.getElementById("mail");
    var societe = document.getElementById("societe"); 
    var contact = document.getElementById("contact");
    var ville = document.getElementById("ville");
    var telephone = document.getElementById("telephone");

    // Validation Email 
    var regex1 = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/;
    if (regex1.exec(email.value) == null) {
        erreur = "Veuillez renseigner un email valide!";
    }
    
    
    
    // Validation Ville
    var regex3= /^[a-zA-Z]*$/;
    if (regex3.exec(ville.value) == null) {
        erreur = "Veuillez renseigner un nom de ville correct";
    }

    // Validation Code Postal
    if (codep.value.length != 5 || isNaN(codep.value))  {
        erreur = "Veuillez renseigner un code postal valide à 5 chiffres";
    }

    // Validation Contact
    if (contact.value == "") {
        erreur = "Veuillez renseigner le nom de la personne à contacter";
    }

    // Validation Societé
    if (societe.value == "") {
        erreur = "Veuille renseigner le nom de la société";
    }
    
    if (erreur) {
        event.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
    }

}

// Ajoute l’événement
formCoordonees.addEventListener('submit', valider);