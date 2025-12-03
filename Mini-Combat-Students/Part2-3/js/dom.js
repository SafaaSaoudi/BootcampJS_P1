// ------------------------------
//  ToDo:Jouter la Fonction pour mettre à jour l'affichage des stats d'un joueur (warrior ou monster)
// ------------------------------

export function updatePlayerStats(elementId, player) {
  
}

// ------------------------------
// ToDo: Ajouter la Fonction qui Affiche un message dans la zone de logs
// ------------------------------

export function logMessage(msg) {
 
}

// ------------------------------
//  ToDo:Terminer les parties manquantes de l'evenemntListner affichant le message 
// ci-dessous en cliquant sur le parent Listner
// ------------------------------

export function clickParentEvent(){
 /* 
   const gameArea = document.---------("#game-area");
    gameArea.------------- {
         console.log("Click détecté sur la zone parent !");
});
*/
}
// ------------------------------
//  Fonction pour mettre à jour l'UI et le state
// ------------------------------
function updateCard(card, health, maxHealth) {
  card.querySelector("p").textContent = `PV : ${health}`;
  card.dataset.state = health <= maxHealth * 0.3 ? "danger" : "normal";
}


// ------------------------------
// A Aoujter la Gestion de la propagation
// ------------------------------
export function reducePVMonster(){
    const monsterCard = document.querySelector("#monster-card");
    const attackBtn = document.querySelector("#attack-btn");
     let monsterHealth = 80; // PV initial
    attackBtn.addEventListener("click", () => {
   
    // Réduction des PV du monstre
     
      monsterHealth -= 10;
      if (monsterHealth < 0) monsterHealth = 0;
    
      updateCard(monsterCard, monsterHealth, 80);
    
      console.log(`Monster PV: ${monsterHealth}`);
      logMessage(`Monster PV: ${monsterHealth}`);
    
      if (monsterHealth === 0) {
        console.log("Le monstre est vaincu !");
        logMessage("Le monstre est vaincu !");
        attackBtn.disabled = true;
      }
    });
}

