
<html>  
<body>

<?php 
 var_dump($_FILES);

//  les types autorisés dans un tableau (A)
$aMimeTypes = array("image/gif", "image/jpeg", "image/pjpeg", "image/png", "image/x-png", "image/tiff");

// On extrait le type du fichier via l'extension FILE_INFO 
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mimetype = finfo_file($finfo, $_FILES["fichier"]["tmp_name"]);
finfo_close($finfo);

// vérifie si le type du fichier correspond à ceux définis dans le tableau A
if (in_array($mimetype, $aMimeTypes))
{
    $extension = substr(strrchr($_FILES["fichier"]["name"],"."),1);
    move_uploaded_file($_FILES["fichier"]["tmp_name"], "images/pro_id.".$extension);         

} else
{
    echo "Ce type de fichier n'est pas autorisé ! (préférez .gif,.jpeg,.png....)";
    exit;
}
?> 

</body>
</html>