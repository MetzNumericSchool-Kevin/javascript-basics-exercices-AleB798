// const nom_sorcier = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
// console.log("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");

// EXO 1 : Définition de variables

const nameShop = "Magimisticalicious";
let healingPotion = 150;
let healingPotionPrice = 20;
let isOpen = true;

// Affichage conditionnel

function openClose (nameShop, isOpen) {

    if (isOpen) {
        console.log(`Bienvenue dans la boutique ${nameShop} Aventurier !`);
    } else {
        console.log("La boutique " + nameShop + " est fermée, revenez plus tard Aventurier !");
    }
}
openClose(nameShop, false);
