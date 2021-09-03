<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/jpg" href="images/jarditou_html_zip/images/jarditou_logo_brouette.jpg">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <title>Tableau</title>

</head>

<body>
    <!-- grand container -->
    <div class="container p-0">
  <header>
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
            <p class="titre" style="font-size: 40px">Tout le jardin</p>
          </div>
        </div>
    </header>    
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
                        <a class="nav-link active" aria-current="page" href="tableau.html">Tableau</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
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
  