var users = ["ali", "murad", "mohsin", "talha"];
var currentUser = ["Ali", "Murad", "rimsha", "tania"];
currentUser.forEach(function (user) {
    var currentUserLower = user.toLowerCase();
    if (users.includes(currentUserLower)) {
        console.log("Sorry, the username '".concat(user, "' is not available. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(user, "' is available."));
        users.push(currentUserLower);
        console.log(users);
    }
});
// // List of current users
// const current_users: string[] = ["john", "alice", "bob", "susan", "jackson"];
// // List of new users
// const new_users: string[] = ["mary", "Alice", "david", "Bob", "Grace"];
// // Loop through new_users to check for uniqueness (case-insensitive)
// for (const new_user of new_users) {
//     // Convert the new_user and current_users to lowercase for case-insensitive comparison
//     const new_user_lower = new_user.toLowerCase();
//     if (current_users.includes(new_user_lower)) {
//         console.log(`Sorry, the username '${new_user}' is not available. Please enter a new username.`);
//     } else {
//         console.log(`Congratulations! The username '${new_user}' is available.`);
//         // Add the new_user (in lowercase) to the current_users list to prevent future duplication
//         current_users.push(new_user_lower);
//     }
// }
