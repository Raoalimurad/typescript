const commonAnimals: string[] = ["Dog", "Cat", "Rabbit"];

console.log("Common animals with a common characteristic:");

// Loop through the commonAnimals array and print a statement for each animal
for (const animal of commonAnimals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Print a line stating what these animals have in common
console.log("Any of these animals would make a great pet.");
