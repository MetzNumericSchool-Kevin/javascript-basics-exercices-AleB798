// const nom_sorcier = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
// console.log("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");

// EXO 1 : Définition de variables

const nameShop = "Magimisticalicious";
let healingPotionNb = 150;
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


// Affichage conditionnel avec switch

// Affiche dans la console Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔
// 1. Le nom de la boutique
// 2. Le nom du Sorcier
// 3. Le prix d'un potion de soin
// 4. La quantité d'une potion de soin
// Fais un prompt pour demander à l'aventurier son choix entre 1 et 4
// Avec un switch ... case sur le numéro choisi par l'aventurier, affiche l'information demandée
// Dans le cas où cela ne correspond pas à aucun des choix, affiche Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕
// ⚠️ Attention, prompt retourne une chaîne de caractère, il faudra certainement le convertir en Number avec parseInt

const nameSorcer = "Archibald"

console.log("Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔")
console.log("1. Le nom de la boutique")
console.log("2. Le nom du sorcier")
console.log("2. Le prix d'une potion de soin")
console.log("4. La quantité d'une potion de soin")

let choice = parseInt(prompt("Quel est votre choix ? "))

function urChoice() {
    switch(choice) {
        case 1:
            console.log(nameShop)
        break;
        case 2:
            console.log(nameSorcer)
        break;
        case 3:
            console.log(`le prix d'une potion de soin est de : ${healingPotionPrice}`)
        break;
        case 4:
            console.log(`La quantité de potion en stock est de : ${healingPotionNb} `)
        break;
    }
}

urChoice();