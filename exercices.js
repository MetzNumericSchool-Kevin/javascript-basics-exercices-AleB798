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

// let money = "Coins"

// let nbOfPotion = parseInt(prompt("Quel quantité de potion de soin souhaitez-vous ? "))

// let totalPrice = (nbOfPotion*healingPotionPrice)

// function price() {
//     console.log(`Le prix pour ${nbOfPotion} potions de soin : ${totalPrice} ${money} mon cher Aventurier.`)
// }

// price();

// Bourse de l'Aventurier

// let playerMoney = 150000;

// function hasEnough() {
//     if ((playerMoney >= totalPrice) && (nbOfPotion <= healingPotionNb)) {
//         console.log("Vous avez d'argent et il y a assez de stock pour acheter des potions de soins")
//         let newStock = (healingPotionNb-nbOfPotion)
//         console.log(`Le nouveau stock est de ${newStock}`)
//         let newPlayerMoney = (playerMoney-totalPrice)
//         console.log(`Votre nouveau solde est de ${newPlayerMoney} ${money}`)
//     } else if (playerMoney < totalPrice ) {
//         console.log("Vous n'avez pas assez d'argent pour acheter des potions de soin !!")
//     } else if (nbOfPotion > healingPotionNb) {
//         console.log("Il n'y a pas assez de stock !!")
//     }
// }

// hasEnough();

// Liste des potions

let potionsNames = ["Lovevicious", "Crucifixious", "Malicious"]
// console.table(potionsNames)

// ou console.log(potionsNames)


// Affichage des potions

// console.log(potionsNames[0])

// // pour trouver la denrière valeur d'un array avec length
// console.log(potionsNames[potionsNames.length-1])

// // avec une boucle forEach
// potionsNames.forEach((potion) => {
//     console.log(`Nous avons de la ${potion}`)
// });

// avec une boucle for

// for (i=0; i<potionsNames.length;i++) {
//     console.log(`Nous avons de la ${potionsNames[i]}`)
// }

// Ajout d'une nouvelle potion

// potionsNames.push("Infectious")
// console.table(potionsNames)

// Finaly, nope.

// potionsNames.pop();
// console.table(potionsNames)

// Rangeons les informations de la potion de soin dans un objet 🧹

// let potion = {
//     potionName: "Miraculicious",
//     potionPrice: 55,
//     potionStock: 20,
// }

// console.log(potion)

// Affichons les informations de la potion

//     Affiche le nom de la potion en utilisant la notation pointée .
//     Affiche le prix de la potion en utilisant la notation crochet []

// console.log(potion.potionName)
// console.log(potion["potionPrice"])

// C'est l'heure de faire l'inventaire...

//     Transforme ton tableau de de noms de potions, en tableau d'objets de potions.
//     Tu peux nommer ta constante inventaire

const inventaire = [
    {
        potionName: "Lovevicious",
        potionPrice: 75,
        potionStock: 100
    },
    {
        potionName: "Crucifixious",
        potionPrice: 150,
        potionStock: 10
    },
    {
        potionName: "Malicious",
        potionPrice: 300,
        potionStock: 64
    }
]

// console.log(inventaire)

// Aventurier, regarde tout ce que je vends !

//     Affiche ton inventaire à l'aventurier avec une boucle for
//     Pour chaque itération, affiche :
//         Nom: <nom_potion>
//         Prix: <prix_potion>
//         Stock: <stock_potion>
//     Trouve une autre solution pour afficher dynamiquement chacune des propriétés de la potion sans utiliser la notation pointée ou crochet. Tu as plusieurs possibilités :
//         for sur Object.keys
//         for ... in sur ton objet
//         for ... of sur Object.entries

for (i=0; i<inventaire.length;i++) {
    console.log(`Nom : ${inventaire[i].potionName}`)
    console.log(`Prix : ${inventaire[i].potionPrice}`)
    console.log(`Stock : ${inventaire[i].potionStock}`)
}

// Autre solution
// for sur Object.keys => Retourne un tableau des clés (propriétés) d'un objet.

for (i = 0; i < inventaire.length; i++) { // Parcourt chaque objet dans le tableau
    const objectKeys = Object.keys(inventaire[i]); // Récupère uniquement les clés de l'objet courant grâce à Object.keys
    for (j = 0; j < objectKeys.length; j++) { // Parcourt chaque clé
        const key = objectKeys[j]; // Récupère la clé courante
        console.log(`${key}: ${inventaire[i][key]}`); // Affiche la clé et sa valeur correspondante
    }
}


// for .... in sur l'objet => Parcourt les clés (propriétés) d'un objet ou les index d'un tableau.

for (const i in inventaire) { // on parcourt les index du tableau inventaire (qui contient les objets)
    for (const key in inventaire[i] ) { // on parcourt les propriétés/clés de l'objet correspondant à inventaire[i]
        console.log(`${key}: ${inventaire[i][key]}`); // on affiche la clé et sa valeur correspondante pour l'objet situé à l'index i
    }
}

// for ... of sur Object.entries => Retourne un tableau de paires [clé, valeur] pour chaque propriété d'un objet.

for (const i of inventaire) { // on parcourt directement les objets contenus dans le tableau inventaire
    for (const [key, value] of Object.entries(i)) { // pour chaque objet on récupères les paires clés/valeurs grâce à Object.entries 
        console.log(`${key} : ${value}`) // on affiche les clés et valeurs correspondantes 
    }
}










