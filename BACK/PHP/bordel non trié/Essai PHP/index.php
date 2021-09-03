<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">   
    <title>Contact</title>
    <link rel="icon" type="image/jpg" href="images/jarditou_html_zip/images/jarditou_logo_brouette.jpg">

</head>


<body>
    <!-- grand container -->
    <div class="container p-0">
  
      <!--début entete -->
        <!-- ici; on indique que entete a display flex, et ligne invisible si pas large -->
        <div class="row d-flex d-none d-lg-block">
  
          <!-- ici, le logo va prendre 8 colonnes de large, en étant collé à gauche  -->
          <div class="row jarditou col-lg-8 float-start">
            <!--Logo Jarditou, qui prend que 4 colonnes de large-->
            <img src="images/jarditou_html_zip/images/jarditou_logo.jpg" class="col-4 alt" alt="logo Jarditou" title="Logo Jarditou">
          </div>
  
          <!-- slogan à droite, qui va prendre 4 colonnes quand grd écran, et se centrer dans sa boite flex -->
          <div class="row col-lg-4 d-flex text-center">
            <p class="titre" style="font-size: 36px">La qualité depuis 70 ans</p>
          </div>
        </div>
    <!--  fin entete-->
  
    <!-- navbar + boutons de recherche -->
    <div class=" row col-12 m-0">
  
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
                  <a class="navbar-brand">Jarditou.com</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
  
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="contact.html">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="tableau.html">Tableau</a>
                    </li>
                </ul>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Votre promotion"
                      aria-label="Votre pomotion">
                  <button class="btn btn-outline-success" type="submit">Rechercher</button>
              </form>
          </div>
      </div>
    </nav>
  </div>
  
  <!-- promo -->
  <div class="row">
    <img class="img-fluid" src="images/jarditou_html_zip/images/promotion.jpg" alt="Responsive image" title="image_promo">
  </div>   
<!-- formulaire -->

<div class="row">
    <p>*Ces zones sont obligatoires</p>
    <form action="toto.php" method="POST" id="formulaire_contact" enctype="multipart/form-data"></form>
    <fieldset>
      <legend>
        <h2>Vos coordonnées</h2>
      </legend>
      <div class="mb-2 form-group">
        <label for="nom" class="mb-2">Nom*</label>
        <input type="text" class="form-control" id="nom" placeholder="Veuillez saisir votre nom">
      </div>
      <div class="mb-2 form-group">
        <label for="prenom" class="mb-2">Prénom*</label>
        <input type="text" class="form-control" id="prenom" placeholder="Veuillez saisir votre prénom">
      </div>
      <p class="mb-2">Sexe*</p>
      <div class="form-check form-check-inline">
        <input class="form-check-input mb-2" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
        <label class="form-check-label" for="inlineRadio1">Féminin</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <label class="form-check-label" for="inlineRadio2">Masculin</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option1">
        <label class="form-check-label" for="inlineRadio3">Neutre</label>
      </div>
      <br>
      <br>
      <div class="mb-2 form-group">
        <label for="date_de_naissance" class="mb-2">Date de naissance*</label>
      </div>
      <div class="input-group mb-2">
        <input type="date" name="ddn" id="date_de_naissance" class="form-control">
        <span class="input-group-text">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-calendar-fill" viewBox="0 0 16 16">
            <path
              d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
          </svg></span>
      </div>
      <div class="mb-2 form-group">
        <label for="code_postal" class="mb-2">Code Postal*</label>
        <input type="text" class="form-control" id="code_postal">
      </div>
      <div class="mb-2 form-group">
        <label for="adresse" class="mb-2">Adresse</label>
        <input type="text" class="form-control" id="adresse">
      </div>
      <div class="mb-2 form-group">
        <label for="ville" class="mb-2">Ville</label>
        <input type="text" class="form-control" id="ville">
      </div>
      <div class="mb-4 form-group">
        <label for="email" class="mb-2">Email*</label>
        <input type="text" class="form-control" id="email" placeholder="dave.loper@afpa.fr">
      </div>
    </fieldset>
    <fieldset>
      <legend>
        <h2>Votre demande</h2>
      </legend>
      <label for="sujet" class="mb-2">Sujet*</label>
      <select id="sujet" class="form-select mb-2" aria-label="Default select example">
        <option selected disabled>Veuillez sélectionner un sujet</option>
        <option value="mes_commandes">Mes commandes</option>
        <option value="question_sur_un_produit">Question sur un produit</option>
        <option value="réclamation">Réclamation</option>
        <option value="autre">Autre</option>
      </select>
      <label for="textarea" class="mb-2">Votre question* :</label>
      <div class="mb-4 form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="textarea"></textarea>
      </div>
      <div class="mb-2 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label mb-4" for="exampleCheck1">J'accepte le traitement informatique de ce
          formulaire</label>
      </div>
      <div>
        <button type="submit" value="Envoyer" class="btn btn-dark mb-4">Envoyer</button>
        <button type="submit" value="Annuler" class="btn btn-dark mb-4">Annuler</button>
      </div>
    </fieldset>
  </div>

  <input type="file" name="fichier"> 




<!-- navbar du bas -->

<div class=" row col-12 m-0">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
               
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav2"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarNav2">
                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                      <a class="nav-link" href="Mentions légales.html">Mentions légales</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="Horaires.html">Horaires</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="Plan du site.html">Plan du site</a>
                  </li>
                 </ul>
              </div> 
        </div>
    </nav>
</div>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</body>

</html>