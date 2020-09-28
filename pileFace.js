/** Fonction  
        * @author Axel 
        **/


//pile ou face 
function pileouface() {
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

lancer(pileouface());

/**Créez une fonction principale "main()"
 *  qui sera la fonction lancée par votre code et appellera toutes les autres. 
 * Cette fonction renvoie "vrai" sauf en cas d'erreur. 
 */
function main() {
    return ""
}
/**déclaration variable globale "pseudo"*/
let pseudo = ("");

/** fonction qui demande le pseudo à l'utilisateur */
function demandePseudo() {
    let pseudo = prompt("choisi ton pseudo")
    return pseudo
}

/**création function compteVoyelles(mot) */
function compteVoyelles(mot) {

    let tabVoyelles = ['a', 'e', 'i', 'o', 'u', 'y'];

    for (let i = 0; i < mot.length; i++) {
        for (let y = 0; y < tabVoyelles.length; y++) {
            if (mot[i] === tabVoyelles[y]) {

            }

        }
    }
}

//création pile ou face 

function pileouface() {
    let a = Math.random();
    console.log(a);

    let b = Math.round(a);
    return b; // porte de sortie
    switch (a) {
        case 1:
            console.log("pile");

        case 0:
            console.log("face");
    }

}
