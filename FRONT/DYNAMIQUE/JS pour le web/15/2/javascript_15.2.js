//
//programme avec math random pour nombre aléatoire

var NbMagique=parseInt(Math.random()*100);

console.log("Le nombre à trouver est : " + NbMagique);

var element = document.getElementById("button1");

element.addEventListener("click", Verif);


// Boules/conditions qui compare et affiche trop grd, trop petit
function Verif() {

    // initialise la variable ChiffreUtilisateur, qui est dans le doc, dans le formulaire (forms), qui est un éléments, avec un id "textBox1"
var ChiffreUtilisateur = document.forms["NombreMagique"].elements["textBox1"].value;

    // var ChiffreUtilisateur = document.getElementById('textBox1');
    console.log("vous avez saisi le chiffre : " + ChiffreUtilisateur);

    if(ChiffreUtilisateur<NbMagique){
        var info = document.getElementById('label1').innerHTML="Trop Petit !";
        // alert(info);
    }
    else if(ChiffreUtilisateur>NbMagique){
        var info= document.getElementById('label1').innerHTML='Trop grand !';
        // alert(info);
    }
    else{
        var info= document.getElementById('label1').innerHTML='Bravo !';
        // alert(info);
    }
}

// faire ne sorte que bouton entrée lance le clic : 
//input.addEventListener('keydown', (e) => {if (e.keyCode == 13) doSomething()});

// à tester !!!