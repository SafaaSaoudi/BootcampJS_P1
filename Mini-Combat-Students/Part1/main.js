import { player } from "./player.js";
import { monster } from "./monster.js";

// Affiche les descriptions dans la console
console.log(player.describe());
console.log(monster.describe());

// Exemple d'utilisation d'un objet
const useBtn = ;

useBtn.("click", () => {
  // Le joueur utilise le premier objet de son inventaire
  const message = player.useItem(player.inventory[0]);
  console.log(message);

  // Le monstre utilise son premier objet
  
  console.log(monsterMsg);
});
