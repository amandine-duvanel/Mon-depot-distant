  //CALCULETTE avec switch

 var a = prompt("Veuillez indiquer un nombre entier") ;
 var calcul = prompt('veuillez entrer un opérateur parmi "+,-,* ou/') ;
 var b = prompt("Veuillez entrer un second nombre entier") ;

switch(calcul){
    case "+" :
        var addi = Number(a) + Number (b);
        alert("Le résultat est : " + addi);
        break;

    case "-" :
        var soustr = Number(a) - Number(b);
        alert("Le résultat est : " + soustr);
        break;    

    case "*" :
        var mult = Number(a)*Number(b);
        alert("le résultat est : " + mult);
        break;

    case "/" :
        var divi = Number(a)/Number(b);
        if(a==0 || b==0){
            alert("ERREUR (0 non admis)");}
        else{
            alert("Le résultat est : " + divi)
        }    
        break;

}