var annee = prompt("Veuillez écrire votre année de naissance svp")
var age = 2021 - annee;

if(age>18) {
    alert("vous êtes agé(é) de "+ age +"ans, Vous êtes majeur(e)");
}
    else if (age<18) {
    alert("vous êtes agé(é) de "+ age +"ans, Vous êtes mineur(e)");
}    
