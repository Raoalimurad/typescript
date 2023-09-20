function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
      greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
  }
     d                                        
  // Create an array of magician's names
  const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  
  // Call makeGreat() with a copy of the original array
  const greatMagicianNames: string[] = makeGreat([...magicianNames]);
  
  // Call showMagicians() to display the original array
  console.log("Original Magician Names:");
  showMagicians(magicianNames);
  
  // Call showMagicians() to display the modified array
  console.log("\nMagician Names with 'the Great':");
  showMagicians(greatMagicianNames);


  