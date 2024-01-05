// Part 1: Humble Beginnings

const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};

// We can access Robin’s inventory using a combination of dot notation and square bracket syntax
console.log(adventurer.inventory[0]);

// As an additional practice exercise, create a loop that logs each item in Robin’s inventory.
adventurer.inventory.forEach((item) => console.log(item));

// Next, give Robin’s feline friend a friend of his own:
// Add a “companion” sub-object to “Leo” with the following properties:
// The companion’s name is “Frank.”
// The companion’s type is “Flea.”
// The companion has its own belongings, which includes a small hat and sunglasses.

adventurer.companion.companion = {
  name: "Frank",
  type: "Flea",
  inventory: ["small hat", "sunglasses"],
};

console.log(adventurer.companion);

adventurer.roll();
adventurer.roll();
adventurer.roll();

// Part 2: Class Fantasy

class Character {
  static MAX_HEALTH = 100;
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }

  /**
   * @param {Companion} companion
   */
  addCompanion(companion) {
    this.companion = companion;
  }

  removeCompanion() {
    delete this.companion;
  }
}

// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// console.log(robin);

// Part 3: Class Features

class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];
  #companion;

  constructor(name, role) {
    super(name);
    // Adventurers have specialized roles.
    if (Adventurer.ROLES.includes(role)) {
      this.role = role;
    } else {
      throw Error(`Role must be 'Fighter', 'Healer', or 'Wizard'.`);
    }
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  climb() {
    console.log(`${this.name} is climbing terrain ahead`);
  }
  attack(character) {
    console.log(`${this.name} is attacking ${character.name}`);
  }
}

// What else should an adventurer be able to do? What other properties should they have?
// climb, search, attack, add companion (added above, companion on character class)

// Next, create a Companion class with properties and methods specific to the companions.
// Finally, change the declaration of Robin and the companions to use the new Adventurer and Companion classes.

class Companion extends Character {
  #com;
  constructor(name, type) {
    super(name);
    this.type = type;
  }
}

const robin = new Adventurer("Robin", "Fighter");
robin.inventory.push("sword", "potion", "artifact");

const leo = new Companion("Leo", "Cat");
const frank = new Companion("Frank", "Flea");
frank.inventory.push("small hat", "sunglasses");

robin.addCompanion(leo);
leo.addCompanion(frank);

console.log(robin);
console.log(leo);
console.log(frank);

// Part 4: Class Uniforms

// Add a static MAX_HEALTH property to the Character class, equal to 100.
// Add a static ROLES array to the Adventurer class, with the values “Fighter,” “Healer,” and “Wizard.” Feel free to add other roles, if you desire!
// Add a check to the constructor of the Adventurer class that ensures the given role matches one of these values.

console.log(Character.MAX_HEALTH);
const fail = new Adventurer("Tiffany", "Explorer");
