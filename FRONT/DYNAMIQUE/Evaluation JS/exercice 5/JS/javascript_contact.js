var formulaire = document.getElementById("formulaire_contact");

    var nom = formulaire.elements["nom"];
    var prenom = formulaire.elements["prenom"];
    var sexe = document.getElementsByName("sexe");
    var dateNaissance = formulaire.elements["date_de_naissance"];
    var codePostal = formulaire.elements["code_postal"];
    var email = formulaire.elements["email"];
    var sujet = formulaire.elements["sujet"];
    var question = formulaire.elements["question"];

    var adresse=formulaire.elements["adresse"];
    var ville = formulaire.elements["ville"];

    var filtreNom = new RegExp ("^[A-Za-z]([- ]?[A-Za-z])+$");
    var filtreEmail = new RegExp("[a-z0-9]?([_.-]?[a-z0-9])*@[a-z0-9]+([_.-]?[a-z0-9]+)?[.]{1}[a-z]{2,6}$");


    /* ajoute l’événement */
    formulaire.addEventListener('submit', valider);

function valider(event) {
    // code a exécuter lorsque le formulaire sera validé

    //validation nom
    if(nom.value == ""){
        document.getElementById("erreur1").innerHTML = "Veuillez remplir le champs avec votre nom";
        event.preventDefault();
    }
    else if (filtreNom.exec(nom.value) == null){
        document.getElementById("erreur1").innerHTML = "Veuillez entrer un nom valide";
        event.preventDefault();
    }
    else {
        document.getElementById("erreur1+").innerHTML = "Ok !";
    }

    // validation prénom
    if(prenom.value == ""){
        document.getElementById("erreur2").innerHTML = "Veuillez remplir le champs avec votre nom";
        event.preventDefault();
    }
    else if (filtreNom.exec(prenom.value) == null){
        document.getElementById("erreur2").innerHTML = "Veuillez entrer un nom valide";
        event.preventDefault();
    }    
    else {
        document.getElementById("erreur2+").innerHTML = "Ok !";
    }
    // (filtreNom.exec(prenom.value)==true)

    // validation sexe
    if(sexe[0].checked ==true || sexe[1].checked ==true || sexe[2].checked ==true ){
        document.getElementById("erreur3+").innerHTML = "C'est valide";
    } else{
        document.getElementById("erreur3").innerHTML = "veuillez cocher une case";
        event.preventDefault();
    }

    // validation date de naissance
    if(dateNaissance.value ==""){
        document.getElementById("erreur4").innerHTML = "veuillez entrer votre date de naissance";
        event.preventDefault();
    } else{
        document.getElementById("erreur4+").innerHTML = "C'est valide !";
    }

    // validation code postal
    if(codePostal.value.length != 5 || isNaN(codePostal.value)) {
        document.getElementById("erreur5").innerHTML = "Entrez le code postal sur 5 chiffres s.v.p. !.";
        event.preventDefault();
    } else{
        document.getElementById("erreur5+").innerHTML = "C'est valide";
    }

    //validation adresse et ville (pas vide)
    if (adresse.value =="" ){
        document.getElementById("erreur6").innerHTML = "Veuillez renseigner une adresse";
    } else{
        document.getElementById("erreur6+").innerHTML = "Valide";
    }

    if(ville.value ==""){
        document.getElementById("erreur7").innerHTML = "Veuillez renseigner une ville";
    } else{
        document.getElementById("erreur7+").innerHTML = "Valide";
    }


    //validation email 
    if (filtreEmail.exec(email.value) == null) {
        document.getElementById("erreur8").innerHTML = "Entrez un email valable s.v.p. !";
        event.preventDefault();
    } else{ 
        document.getElementById("erreur8+").innerHTML = "Valide";
     }


    //validation sujet
    if (sujet.selectedIndex == 0) {
        event.preventDefault();
        document.getElementById("erreur9").innerHTML = "Veuillez choisir un sujet";
    } else {
        document.getElementById('erreur9+').innerHTML = "Valide";
    }

    var filtreQuestion = new RegExp ("^[a-zA-Z\d\s?'ç!àéèîï]*$");

    //validation question
    if(question.value ==""){
        event.preventDefault();
        document.getElementById("erreur10").innerHTML = "Veuillez entrer une question";
    } else if (filtreQuestion.exec(question.value) == false){
    event.preventDefault();
    document.getElementById("erreur10").innerHTML = "Veuillez entrer une question valide";
    }
    else{
        document.getElementById("erreur10+").innerHTML = "Valide";
    }

    // validation traitement formulaire
    if(formulaire.checkBut.checked == false){
        event.preventDefault();
        document.getElementById("erreur11").innerHTML = "Veuillez cocher la case avant d'appuyer sur envoyer";
    }

}

