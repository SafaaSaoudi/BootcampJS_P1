export default class Player {
constructor(name, health, level = 1, inventory = []) {
this.name = name;
this.health = health;
this.level = level;
this.inventory = inventory;
}


// Getter pour afficher les stats
get stats() {
return `${this.name} - PV: ${this.health}, Niveau: ${this.level}, Inventaire: ${this.inventory.join(", ")}`;
}


// Setter pour modifier la santé
set setHealth(newHealth) {
this.health = newHealth;
}


// Méthode d'attaque (générique)
attack() {
return `${this.name} attaque et inflige 5 dégâts !`;
}
}