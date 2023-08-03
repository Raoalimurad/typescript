var guest = ["Fahad", "Ghulam", "ali", "yasir", "Taha"];
console.log("Sorry i can invite only two person");
while (guest.length > 2) {
    var delteguest = guest.pop();
    console.log("".concat(delteguest, " i can not invite you because i have no more spcae"));
}
for (var _i = 0, guest_1 = guest; _i < guest_1.length; _i++) {
    var gue = guest_1[_i];
    console.log("".concat(guest, " you are sill invited kindly come"));
}
guest.splice(0, guest.length);
console.log(guest);
