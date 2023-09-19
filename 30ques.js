var usernames = ["admin", "Eric", "Alice", "Bob", "Charlie"];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
// Remove all usernames from the array
usernames.length = 0; // This empties the array
// Check if the list is empty again and print the message
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
