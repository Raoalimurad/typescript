var commonAnimals = ["Dog", "Cat", "Rabbit"];
console.log("Common animals with a common characteristic:");
// Loop through the commonAnimals array and print a statement for each animal
for (var _i = 0, commonAnimals_1 = commonAnimals; _i < commonAnimals_1.length; _i++) {
    var animal = commonAnimals_1[_i];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
// Print a line stating what these animals have in common
console.log("Any of these animals would make a great pet.");
