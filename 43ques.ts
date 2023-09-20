function makeSandwich(...items:string[]){
    console.log("Making a sandwich with the following items:");
    for (const item of items) {
      console.log(`- ${item}`);
    }
    console.log("Sandwich is ready!\n");
  }
  makeSandwich("Lettuce", "Tomato", "Cheese");
  makeSandwich("Turkey", "Bacon");
  makeSandwich("Tuna Salad");
