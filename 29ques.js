var names = ["admin", "rao", "ali", "murad"];
names.forEach(function (name) {
    if (name == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(names, ", thank you for logging in again."));
    }
});
