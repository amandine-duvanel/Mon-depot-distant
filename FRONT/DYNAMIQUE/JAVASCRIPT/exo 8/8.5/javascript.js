// le nombre de voyelle dans 1 mot
// on donne une variable au mot, et une variable qui va compter le nb de voyelles
//1 passage = 1 lettre, comptée ou non

//déclaration des variables
var mot=prompt("Veuillez saisir un mot")
var voy=0

//boucle

for(var i=0;i<mot.length; i=i+1)
{
    //si le mot contient les voyelles
    if (mot[i]=='a' || mot[i]=='e' || mot[i]=='i' || mot[i]=='o' || mot[i]=='u' || mot[i]=='y')
    {
        voy = voy + 1;
    }
}
document.write("Mot saisi: " + mot + "</br>")
document.write("Nombre de voyelles dans le mot saisi : "+voy);
