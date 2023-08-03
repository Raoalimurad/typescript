var predinner = ["Fahad", "Ghulam", "ali"];
console.log("the list of initial guest:", predinner); //intial guest
///Annoucing the big news about dinner;
console.log('Good news! we have a big dinner');
predinner.unshift("Ali Murad");
predinner.splice(Math.ceil(predinner.length / 2), 0, 'Gul shah');
predinner.push('Yasir');
console.log('The new list of guests is', predinner);
for (var _i = 0, predinner_1 = predinner; _i < predinner_1.length; _i++) {
    var guest = predinner_1[_i];
    console.log("".concat(guest, " you are invited in dinner kinldy come"));
}
