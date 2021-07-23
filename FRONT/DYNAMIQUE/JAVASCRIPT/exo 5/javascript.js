
//demander le nom 
var nom = window.prompt("Saisissez votre nom svp");

//demander le prénom
var prénom = window.prompt("Saisissez votre prénom svp");

//demander si homme ou femme et demander les infos
var sexe;
if (window.confirm("Etes-vous un homme ? \n[Merci d'appuyer sur 'annuler' si vous êtes une femme]")==true)
{
   alert("Bonjour Monsieur " +prénom +" "+nom+"\nBienvenue sur notre site web !");
} else {
    alert("Bonjour Madame " +prénom +" "+nom+"\nBienvenue sur notre site web !");
}


