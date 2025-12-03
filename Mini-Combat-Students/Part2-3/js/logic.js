// ------------------------------
// Fonction pure : calculateDamage
// ------------------------------
export function calculateDamage(base, bonus) {
  // Fonction pure : ne modifie aucune variable externe
 
 
}

// ------------------------------
// Closure : createSpell
// ------------------------------
export function createSpell(power) {
  // Retourne une fonction qui applique le pouvoir magique
  return function(target) {
    return `      subit        points de dégâts magiques !`;
  };
}

// ------------------------------
// Transformation d'inventaire
// ------------------------------
export function inventoryOperations(inventory) {
  // Exemple map() : ajouter "(utilisable)" à chaque item
  const mapped = 

  // Exemple filter() : ne garder que les items contenant "Potion"
  const filtered = 

  // Exemple reduce() : concaténer tous les items en une chaîne
  const reduced = 

  return { mapped, filtered, reduced };
}

// ------------------------------
// Fonction cloneState : immutabilité
// ------------------------------
export function cloneState(state) {
  // Copie un objet ou un tableau sans modifier l'original
  if (Array.isArray(          )) {
    
  } else if (typeof state === "object") {
    return { ...state };
  } else {
    throw new Error("Seuls les objets et tableaux peuvent être clonés.");
  }
}
