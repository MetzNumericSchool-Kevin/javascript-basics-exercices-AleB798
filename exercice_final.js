// Alors Archibald 🧙‍♂️, voici le programme qui va te rendre riche 👍 :

// Pré-requis :

//     La bourse de l'aventurier avec 100 🪙
//     Ta bourse avec 0 🪙
//     Avoir ton inventaire de potions avec :
//         Potion de soin x1 au prix de 40 🪙
//         Potion d'endurance x1 au prix de 20 🪙
//         Potion de mana x2 au prix de 20 🪙
//     Avoir un inventaire pour l'aventurier qui ne contient rien pour le moment

let playerPurse = 100;
let sorcerPurse = 0;

const sorcerInventaire = [
    {
        potionName: "Potion de soin",
        potionPrice: 40,
        potionStock: 1
    },
    {
        potionName: "Potion d'endurance",
        potionPrice: 20,
        potionStock: 1
    },
    {
        potionName: "Potion de Mana",
        potionPrice: 20,
        potionStock: 2
    }
]

const playerInventaire = []


// Le programme doit faire les choses suivantes :

//     Les actions possibles de l'Aventurier
//         Acheter une potion
//             Lors de ce choix, demande-lui quelle potion acheter, et en quelle quantité
//                 🚀 Tu peux voir pour n'afficher que les potions qui ont encore un stock > 0
//                 🚀 Tu peux voir pour ordonner la liste des potions du stock le plus grand au plus petit
//             Avec ces informations:
//                 Si la quantité demandée est supérieure au stock, prévient l'Aventurier que ce n'est pas possible
//                 Sinon
//                     déduit sa bourse du total et ajoute cela à la tienne
//                     déduit le stock de la potion achetée
//                     ajoute la/les potion(s) achetée(s) dans l'inventaire de l'Aventurier
//         Vendre une potion
//             Il peut essayer de vendre une des potions qu'il a dans l'inventaire (au même prix)
//                 Pour cela, tu dois lui faire deviner un chiffre entre 1 et 5 (voir Math.random) 🎲
//             S'il a juste, tu lui rachete tout le stock de la potion en question (avec les mêmes règles de gestion que l'achat)
//             S'il a faux, tu peux lui dire de re-tenter sa chance 😈
//         Quitter
//             Il ne peut pas hehe 😈
//     Ce que l'aventurier ne sait pas, c'est que tu lui as jeté un sort qui l'oblige à répêter une de ces actions tant que sa bourse n'est pas vide avec do ... while 🪄
//     Affiche ton gain, fini les soupes de 🍄 !
//     🚀 Si tu veux éviter la répétition de code tu peux utiliser des fonctions
