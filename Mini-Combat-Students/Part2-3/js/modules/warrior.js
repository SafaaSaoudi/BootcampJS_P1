import Player from './player.js';

// Guerrier avec force
export default class Warrior extends Player {
constructor(name, health = 120, level = 1, inventory = [], strength = 15) {
  super(name, health, level, inventory);
  this.strength = strength;
}

  // Getter pour stats détaillées
  get stats() {
    return `${super.stats}, Force: ${this.strength}`;
  }

  // Méthode attack spécifique
  attack() {
    return `${this.name} (Guerrier) attaque avec force ${this.strength} !`;
  }
}
