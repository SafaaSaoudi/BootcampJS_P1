// Objet joueur exporté
export const player = {
  name: "Héros",
  health: 100,
  mana: 50,
  inventory: ["Potion", "Épée", "Bouclier"],

  // Fonction fléchée : utiliser un item
  useItem: (item) => {
    return `Le joueur utilise : ${item}`;
  },

  // Description via template literal
  describe() {
    return `
      Joueur : ${this.name}
      PV : ${this.health}
      Mana : ${this.mana}
      Inventaire : ${this.inventory.join(", ")}
    `;
  }
};
