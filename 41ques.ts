


function printName(Names: string[] ):void{
Names.forEach(name => {
    console.log(name)
})};

// modify this function
function printNames(Names: string[] ):void{
    Names.forEach(name => {
        console.log(`the great ${name}`)
    })};






const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
printName( magicianNames);
printNames(magicianNames)