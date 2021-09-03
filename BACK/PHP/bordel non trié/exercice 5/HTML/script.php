<!-- PHP formulaire -->

<html>
<body>

    <?php

        echo "<h1>Fiche de contact</h1><br>";

        // pour récup les infos rentrées 
        $prenom = $_POST['Prenom'];
        $nom = $_POST['Nom'];
        $cp = $_POST['Code_Postal'];
        $email = $_POST['email'];
        $question = $_POST['question'];
        $sexe = $_POST['sexe'];
        $ddn=$_POST["ddn"];

    // Défintion des expressions régulières
    $filtre_nom = preg_match('#^[A-Za-z]([- ]?[A-Za-z])+$#',$nom);
    $filtre_prenom = preg_match('#^[A-Za-z]([- ]?[A-Za-z])+$#',$prenom);
    $filtre_cp = preg_match('#(^[\d]{5}$)#', $cp);
    $filtre_email = preg_match('#^[a-z0-9]?([_.-]?[a-z0-9])*@[a-z0-9]+([_.-]?[a-z0-9]+)?[.]{1}[a-z]{2,6}$#', $email);
    $filtre_question = preg_match("#^[a-zA-Z\d\s?'ç!àéèîï]*$#", $question);
    $filtre_ddn = preg_match('#^[\d]{4}[-][\d]{2}[-][\d]{2}$#',$ddn);

        // Valider les données côté serveur

        // Validation NOM
        if (empty($nom))
            {
                echo "Le nom doit être renseigné";
            }
        elseif($filtre_nom == 0)   
            {
                echo "Veuillez saisir un nom valide";
            }
        else
        {
            echo "NOM : ". $nom. "<br>";
        }    

        // Validation prénom
        if (empty($prenom))
        {
            echo "Le prénom doit être renseigné";
        }
    elseif($filtre_prenom == 0)   
        {
            echo "Veuillez saisir un prénom valide";
        }
    else
    {
        echo "Prénom : ". $prenom. "<br>";
    }    

    // Validation code postal
    if (empty($cp))
    {
        echo "Le code postal doit être renseigné";
    }
    elseif($filtre_cp == 0)   
        {
            echo "Veuillez saisir un code postal valide (5 chiffres)";
        }
    else
    {
        echo "Code Postal : ". $cp. "<br>";
    }    

    // validation date de naissance
  
    // echo date($_POST['ddn']);
    if($filtre_ddn == 0)
    {
        echo "La date de naissance doit être renseignée !<br>";
    } else
    {
        echo "date de naissance : ". $ddn ."<br>";
    }

    // Validation sexe
    if isset($sexe)
    {
        echo "Sexe : " . $sexe;
    } else 
    {
        echo "veuiller cocher une bouton";
    }

    // validation email
    if (empty($email))
            {
                echo "Une adresse email doit être renseignée";
            }
        elseif($filtre_nom == 0)   
            {
                echo "Veuillez saisir une adresse email valide";
            }
        else
        {
            echo "Adresse Mail : ". $email. "<br>";
        }    


    // validation question
    if (empty($question))
    {
        echo "Veuillez entrer une question";
    }
        elseif($filtre_question == 0)   
            {
                echo "Veuillez saisir une question valide";
            }
        else
        {
            echo "Question : ". $question. "<br>";
        }
     
    // validation sujet
    if (empty($_POST["sujet"])) {
        echo "Le sujet doit être renseigné !<br>";
    } 
    else {
        echo "Sujet : " . $sujet = $_POST['sujet'] . "<br>";
    }

    // Validation check info
   // echo $_POST["checkBut"];

   // var_dump($_POST["checkBut"]);


    if(isset($_POST["checkBut"])){

        echo "Traitement informatique de ce formulaire reçu !<br>";
    } else
    {
       echo "Veuillez accepter le traitement informatique !<br>";

    }
    


    ?>


</body>
</html>