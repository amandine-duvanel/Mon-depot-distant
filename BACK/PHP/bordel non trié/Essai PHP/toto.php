<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <title>Document</title>
</head>
<body>

    <!-- zone php  -->

        <?php
        if(isset($_POST) && !empty($_POST)){
            ?><pre><?php print_r($_POST) ?> </pre> <?php
            ?><pre><?php print_r($_FILES) ?> </pre> <?php

            IF($_FILES['monfichier']['error'] ==0 ){

            } else{
                $error= 'Problème formulaire';
            }

        }

        ?>


    <!-- zone formulaire -->

    <div style="color:red"

    <form method ="POST" action="#" enctype="multipart/form-data">
        <input type ="file" name="monfichier" value="">
        <input type="submit" name="chargement" value="charger le fichier">
</form>

</body>
</html>
