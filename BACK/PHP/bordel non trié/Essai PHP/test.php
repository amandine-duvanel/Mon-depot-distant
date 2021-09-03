<html>
<body>

<?php

$a = array("19001" => array("Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "", "", "Centre", "Centre", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Validation", "Validation"), 
     "19002" => array("Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Validation", ""), 
     "19003" => array("", "", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "", "", "Validation") 
    );

//quelle semaine a lieu la validation du groupe 19002 ? 
//  sortir l'index en numéro quand

    // $valid = array_search("Validation",$a[19002]);
    // echo "La validation du groupe 19002 a lieu dans le semaine ".($valid +1);


        // Trouver la position de la dernière occurrence de Stage pour le groupe 19001.

            // $position = array_search("Stage",array_reverse($a[19001]));
            // echo "Le dernier stage du groupe 19001 c'est dans la semaine " .(count($a[19001])-$position) . ".";

// Extraire, dans un nouveau tableau, les codes des groupes.
    // print_r(array_keys($a));

   // Combien de semaines dure le stage du groupe 19003 ?
$counts= array_count_values($a[19003]);
echo "le stage du groupe 19003 dure ". ($counts['Stage'])." semaines.";


?>


</body>
</html>
