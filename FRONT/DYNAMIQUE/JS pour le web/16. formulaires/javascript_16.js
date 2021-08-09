
var formulaire = document.getElementById("formulr");

function valider(event) {
    // code a exécuter lorsque le formulaire sera validé
    var cp = formulaire.elements["codePostal"];
    var email = formulaire.elements["email"];
    var societe = formulaire.elements["nomSociete"]; 
    var contact = formulaire.elements["pContact"];
    var ville = formulaire.elements["ville"];

     // ****Validation Email**** //
     
     var filtreEmail = new RegExp("^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$");
     if (filtreEmail.exec(email.input) == false) {
         erreur = "Entrez un email valable s.v.p. !";
     }


         //  var regex = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/;


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

    // si erreur, n'envoie pas les infos
    else {
        erreur = "c'est envoyé !";
        document.getElementById("erreur").textContent = erreur;
    }
    if (erreur) {
        event.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
    }
}

/* ajoute l’événement */
formulaire.addEventListener('submit', valider);














//remplacer par mes rex ex après 


// window.onload = function(){

//     //Déclaration des variables
//     var societe = document.getElementById("nomSociete");
//     var acontacter = document.getElementById("pContact");
//     var adresse = document.getElementById("adrEntreprise")
//     var postal = document.getElementById("codePostal");
//     var Ville = document.getElementById("ville");
//     var Email = document.getElementById("email");
//     var tel = document.getElementById('telephone');
//     var environnement = document.getElementById("envirProp");


//     //  >pas utile, le ".forms" existe pour ça
//     var formulaire = document.getElementById("formulr");

//     //Déclaration des expressions régulières

//         //  La "Société" doit comporter au moins 1 caractère.
//         var filtreSociete = new RegExp("^[a-zA-Z0-9 ]+$");

//         // La "Personne à contacter" doit comporter au moins 1 caractère.
//         var filtreContact = new RegExp ("^[a-zA-Z0-9]+$");

//         // Le "Code postal" doit comporter 5 caractères numériques.
//         var filtrePostal = new RegExp ("^[0-9]{5}$");

//         // La "Ville" doit comporter au moins 1 caractère.
//         var filtreVille = new RegExp("^[a-zA-Z0-9]+$");

//         // Le Email doit comporter au moins le caractère "@".
//         var filtreEmail = new RegExp("^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$");



//     // envoyer le formulaire 
//     document.forms.addEventlistener("submit",fonctionTest());
        

//     function fonctionTest(event){

//         var erreur;

//         // Execution des filtres
//         var resultSociete = filtreSociete.test(societe.value);
//         console.log("Input société vaut" + resultSociete);

//         var resultContact = filtreContact.test(acontacter.value);
//         console.log("Input contact vaut " + resultContact);

//         var resultPostal = filtrePostal.test(postal.value);
//         console.log("Input posal vaut " + resultPostal);    

//         var resultVille = filtreVille.test(Ville.value);
//         console.log("Input ville vaut " + resultVille);    

//         var resultEmail = filtreEmail.test(Email.value);
//         console.log("Input email vaut " + resultEmail);    

//         // définition variables des span erreur
//         var erreurSociete = document.getElementById("erreur1");
//         var erreurContact = document.getElementById("erreur2");
//         // var erreurPostal = document.getElementById("erreur3");
//         // var erreurVille = document.getElementById("erreur4");
//         // var erreurEmail = document.getElementById("erreur5");


//         if(resultSociete == false){

//             erreur = "Menteur!"
//             // erreur.style.color ="red";
//         }

//         // if(resultContact == false){
//         //     // e.preventDefault();
//         //     erreurContact.textContent ="Essaye encore!";
//         //     erreurContact.style.color ="red";
        
//         if(erreur){
//             event.preventDefault();
//             document.getElementById("erreur1").innerHTML = erreur;
//             return false;

//         } else {
//             window.alert("fucking formulaire envoyé!")

//         }

//     };
// }




// Le champ "Environnement technique" est une liste déroulante dans laquelle on peut choisir les techniques utilisées pour le projet proposé, ainsi qu'une zone de texte qui reçoit la sélection.

// Il est permis de rajouter des informations manuelles dans la zone de texte.

// La valeur "Choisissez" ne doit pas s'afficher dans la zone de texte si elle a été sélectionnée.

// Prévoyez les messages appropriés en cas d'erreur de saisie :

//coder le bootrap pour le visuel !!! 