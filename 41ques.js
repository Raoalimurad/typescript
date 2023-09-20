function printName(Names) {
    Names.forEach(function (name) {
        console.log(name);
    });
}
;
// modify this function
function printNames(Names) {
    Names.forEach(function (name) {
        console.log("the great ".concat(name));
    });
}
;
var magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
printName(magicianNames);
printNames(magicianNames);
