//
var element = document.getElementById("touch");

element.addEventListener("click", ClicBouton);

var valcontrol = document.getElementById('InpPrenom');


 function ClicBouton() {
    alert("Vous avez saisie :" +valcontrol.value);
}