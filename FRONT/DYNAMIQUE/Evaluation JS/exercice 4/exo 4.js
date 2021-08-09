// Total d'une commande

let PU = parseInt(prompt("Veuillez entrer le Prix Unitaire du produit"));
let QTECOM = parseInt(prompt("veuillez entrer la quantité que vous souhaitez commander"));
let PAP;
// prix avant remise et frais de port
let TOT = PU*QTECOM;
// valeur de la remise
let REM;
let P_Remise;
// prix avec remise et frais de port
let PORT;

console.log("Prix avant remise et frais de port : " + TOT + "€");

// partie remise
    if(TOT >= 100 && TOT <= 200){
        REM=(5*TOT)/100;    // la valeur de la remise
        P_Remise=TOT-REM;
    }

    else if(TOT>200){
        REM=(10*TOT)/100;   // la valeur de la remise
        P_Remise=TOT-REM;
    }

    else{
        REM=0;
        P_Remise=TOT
    }

    // afficher le prix à payer, et les frais de port à part
// partie frais de port
    if(P_Remise>500){
        PORT=0;  // = frais de port offert
        PAP=P_Remise;
    }
    if(P_Remise<500){
        PORT=(2*P_Remise)/100;   //valeur des frais de port
        PAP=P_Remise+PORT;
    }

    if(PORT<6 && PORT!=0){
        let PortMini = 6;
        PAP = P_Remise + PortMini;
        PORT=6;
    }


// arrondir au centieme 
function arrondir1() {
    PAP = PAP.toFixed(2);
    return PAP;
}

function arrondir2() {
    REM = REM.toFixed(2);
    return REM;
}

function arrondir3() {
    PORT = PORT.toFixed(2);
    return PORT;
}

arrondir1();
arrondir2();
arrondir3();

document.write("Vous devez payer " + PAP + "€.</br>");    
document.write("Comprenant " + REM + "€ de remise. </br>");
document.write("Et " + PORT + "€ de frais de port.");