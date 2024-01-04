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
