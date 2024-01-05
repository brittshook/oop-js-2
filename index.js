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
    return result;
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

  constructor(name, role) {
    super(name);

    if (Adventurer.ROLES.includes(role)) {
      this.role = role;
    } else {
      throw Error(`Role must be 'Fighter', 'Healer', or 'Wizard'.`);
    }

    this.inventory.push("bedroll", "50 gold coins");
  }
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  climb() {
    console.log(`${this.name} is climbing terrain ahead`);
  }
  /**
   * @param {Adventurer} opponent
   */
  duel(opponent) {
    while (this.health > 50 && opponent.health > 50) {
      const myRoll = super.roll();
      const opponentRoll = opponent.roll();
      const loser = myRoll > opponentRoll ? opponent : this;
      loser.health -= 1;
      console.log(
        `${this.name} health: ${this.health} ${opponent.name} health: ${opponent.health}`
      );
    }
    const winner = this.health > 50 ? this.name : opponent.name;
    console.log(`${winner} wins!`);
  }
}

// What else should an adventurer be able to do? What other properties should they have?
// climb, search, add companion (added above, companion on character class)

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
try {
  const fail = new Adventurer("Tiffany", "Explorer");
} catch (err) {
  console.log(err);
}

// Part 5: Gather your Party

// Example:
class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  }
  generate(name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }
  findByIndex(index) {
    return this.adventurers[index];
  }
  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
const stella = healers.generate("Stella");
console.log(healers.findByName("Stella"));

// Part 6: Developing Skills
// Create an additional method, duel(), for the Adventurer class with the following functionality:
// Accept an Adventurer as a parameter.
// Use the roll() functionality to create opposing rolls for each adventurer.
// Subtract 1 from the adventurer with the lower roll.
// Log the results of this “round” of the duel, including the rolls and current health values.
// Repeat this process until one of the two adventurers reaches 50 health.
// Log the winner of the duel: the adventurer still above 50 health.

robin.duel(healers.findByName("Stella"));