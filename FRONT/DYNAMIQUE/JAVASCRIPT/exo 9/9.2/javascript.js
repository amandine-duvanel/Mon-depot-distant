

//chaine entrée
var str1 =prompt("veuillez écrire une phrase svp");
// délimiteur
var str2 = " ";
//n iem mot à sortir
var n = parseInt(prompt("veuillez entrer un nombre, inférieur au nombre de mot dans votre phrase"));

var caract;

var result;

var tour;

var nblettres;

var mot ="";

var sorti ="";


function strtok(str1,str2,n) {

    //lettre une par une
    var nblettres = str1.length;
    var rech = 0 ;
    

        for (tour=0;tour<nblettres;tour++){
            //pour faire sous chaine de str1 qui suive "tour", lettre par lettre
            caract = str1.substr(tour,1);
            //pour stocker les lettres ensemble tant que pas de délimiteur
            result=result+caract;
            //si pas de délimiteur, on accumule les lettres 
                if(caract!=str2){
                mot=mot+caract;
                }
            // condition quand on tombe sur le délimiteur, soit le numéro de mot (rech) vaut n et on sort, soit c'est pas le même et on continue en vidant le mot
                if(caract==str2){
                    console.log("détécté : " + mot + "</br>");
                    rech++;
                    //si on ne tombe pas sur le délimiteur
                    if(rech!=n){
                        mot= "";
                    }
                    //si on tombe sur le délimiteur
                    else if (rech=n){
                        sorti = mot;
                        break;
                    }    
                }
        }
}
strtok(str1,str2,n);

console.log("pour str1 qui vaut : " +str1 + " avec " + str2+ " comme délimiteur, et n qui vaut : " + n + " on trouve comme résultat " + sorti);