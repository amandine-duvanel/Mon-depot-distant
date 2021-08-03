
//Déclaration des variables
var societe = document.getElementById("nomSociete");
var acontacter = document.getElementById("pContact");
var adresse = document.getElementById("adrEntreprise")
var postal = document.getElementById("codePostal");
var Ville = document.getElementById("ville");
var Email = document.getElementById("email");
var tel = document.getElementById('telephone');
var environnement = document.getElementById("envirProp");

var formulaire = document.getElementById("formulr");

//Déclaration des expressions régulières

    //  La "Société" doit comporter au moins 1 caractère.
    var filtreSociete = new RegExp("^[a-zA-Z0-9]+$");

    // La "Personne à contacter" doit comporter au moins 1 caractère.
    var filtreContact = new RegExp ("^[a-zA-Z0-9]+$");

    // Le "Code postal" doit comporter 5 caractères numériques.
    var filtrePostal = new RegExp ("^[0-9]{5}$");

    // La "Ville" doit comporter au moins 1 caractère.
    var filtreVille = new RegExp("^[a-zA-Z0-9]+$");

    // Le Email doit comporter au moins le caractère "@".
    var filtreEmail = new RegExp("^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$");




 // envoyer le formulaire 
document.getElementById("formulr").addEventListener("submit",function(e) {
    // e.preventDefault();

    // Execution des filtres
    var resultSociete = filtreSociete.test(societe);
    console.log("Input société vaut" + resultSociete);

    var resultContact = filtreContact.test(acontacter);
    console.log("Input contact vaut " + resultContact);

    var resultPostal = filtrePostal.test(postal);
    console.log("Input posal vaut " + resultPostal);    

    var resultVille = filtreVille.test(Ville);
    console.log("Input ville vaut " + resultVille);    

    var resultEmail = filtreEmail.test(Email);
    console.log("Input email vaut " + resultEmail);    

    // définition variables des span erreur
    var erreurSociete = document.getElementById("erreur1");
    var erreurContact = document.getElementById("erreur2");
    // var erreurPostal = document.getElementById("erreur3");
    // var erreurVille = document.getElementById("erreur4");
    // var erreurEmail = document.getElementById("erreur5");


    if(resultSociete == false){
        e.preventDefault();
        erreurSociete.textContent ="Menteur!";
        erreurSociete.style.color ="red";
    }

    if(resultContact == false){
        e.preventDefault();
        erreurContact.textContent ="Essaye encore!";
        erreurContact.style.color ="red";
    }

       else { alert("fucking formulaire envoyé!");
    };

});


// Probleme de reg ex ??? !!!




// Le champ "Environnement technique" est une liste déroulante dans laquelle on peut choisir les techniques utilisées pour le projet proposé, ainsi qu'une zone de texte qui reçoit la sélection.

// Il est permis de rajouter des informations manuelles dans la zone de texte.

// La valeur "Choisissez" ne doit pas s'afficher dans la zone de texte si elle a été sélectionnée.

// Prévoyez les messages appropriés en cas d'erreur de saisie :

//coder le bootrap pour le visuel !!!