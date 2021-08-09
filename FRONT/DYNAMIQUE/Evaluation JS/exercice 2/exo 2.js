//table de mutliplication

var chiffre = parseInt(prompt("Veuillez entrez un chiffre pour afficher sa table de multiplication."));

// fonction table
function table(chiffre){

    for(i=0;i<=10;i++)
    {
        resultat = chiffre*i;
        document.write(i + "*" + chiffre + "=" + resultat + "</br>");
        console.log(i + "*" + chiffre + "=" + resultat);

    }    
}

table(chiffre);
 
