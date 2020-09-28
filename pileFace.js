/** Fonction  
        * @author Axel 
        **/

//pile ou face 
function pileouface(){
    let a = Math.random();
    console.log(a);
 
    let b = Math.round(a);
    return b; // porte de sortie
}
 
function lancer(porteDentre) {
 
    switch (porteDentre) {
        case 1:
            console.log("face");
            break;
        case 0:
            console.log("pile");
            break;
    }   
}
 
lancer (pileouface());