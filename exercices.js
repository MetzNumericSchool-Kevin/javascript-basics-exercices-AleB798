// const nom_sorcier = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
// console.log("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");

// EXO 1 : Définition de variables

const nameShop = "Magimisticalicious";
let healingPotionNb = 150;
let healingPotionPrice = 20;
let isOpen = true;

// Affichage conditionnel

// function openClose (nameShop, isOpen) {

//     if (isOpen) {
//         console.log(`Bienvenue dans la boutique ${nameShop} Aventurier !`);
//     } else {
//         console.log("La boutique " + nameShop + " est fermée, revenez plus tard Aventurier !");
//     }
// }
// openClose(nameShop, false);


// Affichage conditionnel avec switch

// const nameSorcer = "Archibald"

// console.log("Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔")
// console.log("1. Le nom de la boutique")
// console.log("2. Le nom du sorcier")
// console.log("2. Le prix d'une potion de soin")
// console.log("4. La quantité d'une potion de soin")

// let choice = parseInt(prompt("Quel est votre choix ? "))

// function urChoice() {
//     switch(choice) {
//         case 1:
//             console.log(nameShop)
//         break;
//         case 2:
//             console.log(nameSorcer)
//         break;
//         case 3:
//             console.log(`le prix d'une potion de soin est de : ${healingPotionPrice}`)
//         break;
//         case 4:
//             console.log(`La quantité de potion en stock est de : ${healingPotionNb} `)
//         break;
//         default:
//             console.log("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕")
//         break;
//     }
// }

// urChoice();

// Calcul du prix total d'une commande de potion

let money = "Coins"

let nbOfPotion = parseInt(prompt("Quel quantité de potion de soin souhaitez-vous ? "))

function price() {
    console.log(`Le prix pour ${nbOfPotion} potions de soin : ${nbOfPotion*healingPotionPrice} ${money} mon cher Aventurier.`)
}

price();