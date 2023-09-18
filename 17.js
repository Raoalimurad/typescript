var guestlist = ["faheem", "ali", "rao", "murad", "aliza"];
while (guestlist.length > 2) {
    var removeguest = guestlist.pop();
    if (removeguest) {
        console.log("sorry ".concat(removeguest, ",i can't invite you"));
    }
}
guestlist.forEach(function (guest) {
    console.log("".concat(guestlist, " you are still invited"));
});
guestlist.pop();
guestlist.pop();
console.log("empty guestlist", guestlist);
