var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function makeGreat(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
// Create an array of magician's names
var magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Call makeGreat() with a copy of the original array
var greatMagicianNames = makeGreat(__spreadArray([], magicianNames, true));
// Call showMagicians() to display the original array
console.log("Original Magician Names:");
showMagicians(magicianNames);
// Call showMagicians() to display the modified array
console.log("\nMagician Names with 'the Great':");
showMagicians(greatMagicianNames);
