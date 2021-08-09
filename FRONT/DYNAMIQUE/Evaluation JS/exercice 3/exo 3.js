//recherche de prénom

let tableau = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
console.log("le tableau de départ est : " + tableau)
// prénom saisi au clavier

let prenom = prompt("Veuillez entrer un prénom sans oublier la majuscule");

// index du prénom dans le tableau (pensez à n-1)
let pos = tableau.indexOf(prenom);
console.log(pos);

// supprime l'élément et décale les autres cases ?
let supprItem = tableau.splice(pos,1);

// supprime le denrier élément
let final = tableau.pop();


// si prénom pas dans le tableau, message d'erreur, sinon affiche le tableau restant
    if(pos==-1){
        document.write("Ce prénom n'est pas dans le tableau, désolée !");
    }
    else  {
        document.write("Les prénoms restants sont : " + tableau);
        console.log(tableau);
    }