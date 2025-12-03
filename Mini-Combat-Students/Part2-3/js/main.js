//Part 1
/*
import { player } from "./modules/player.js";
import { monster } from "./monster.js";

// Affiche les descriptions dans la console
console.log(player.describe());
console.log(monster.describe());

// Exemple d'utilisation d'un objet
const useBtn = document.getElementById("use-item-btn");

useBtn.addEventListener("click", () => {
  // Le joueur utilise le premier objet de son inventaire
  const message = player.useItem(player.inventory[0]);
  console.log(message);

  // Le monstre utilise son premier objet
  const monsterMsg = monster.useItem(monster.inventory[0]);
  console.log(monsterMsg);
});
*/
//Part 2 
import Warrior from "./modules/warrior.js";
import Monster from "./modules/monster.js";

// Création des personnages
const warrior = new Warrior("Thorin", 120, 1, ["Potion", "Hache", "Cuirass"], 15);
const monster = new Monster("Elandra", 80, 1, ["Potion", "Livre ancien"], 20);

// Affichage des stats
console.log(warrior.stats);   // Thorin - PV: 120, Niveau: 1, Inventaire: Potion, Hache, Cuirass, Force: 15
console.log(monster.stats); // Elandra - PV: 80, Niveau: 1, Inventaire: Potion, Livre ancien, Puissance magique: 20

// Attaques


// Exemple de bind() avec setTimeout


//Part 3
import { calculateDamage, createSpell, inventoryOperations, cloneState } from "./logic.js";
import Player from "./modules/player.js";
const player=new Player("Lina", 100, 2, ["Sandwich", "Bouclier", "PotionInvent"] )

// Fonction pure
const dmg = calculateDamage(10, 5);
console.log("Dégâts calculés :", dmg); // 15

// Closure : créer un sort
const fireball = createSpell(20);
console.log(fireball("Goblin")); // Goblin subit 20 points de dégâts magiques !

// Transformations sur l'inventaire
const invOps =
console.log("Mapped :", invOps.mapped);
console.log("Filtered :", invOps.filtered);
console.log("Reduced :", invOps.reduced);

// Clonage immuable
const playerClone = 
console.log("Clone du joueur :", playerClone);

// Tester l’immutabilité
playerClone.health = 50;
console.log("Original :", player.); // Toujours 100
console.log("Clone modifié :", playerClone.health); // 50


//Part 4
// ------------------------------
// 1️⃣ Sélection des éléments avec DOM
// ------------------------------

/*

import { clickParentEvent, reducePVMonster,  } from "./dom.js";


// ------------------------------
// ToDo:Appeler de la methode updatePkayerStats: Initialisation de l'affichage du player warrior et monster
// ------------------------------




// Appel de l'evenemnt parent
clickParentEvent();

// Appel de la méthode de reduction de PV
reducePVMonster();


*/



