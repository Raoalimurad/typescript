let users=["ali","murad","mohsin","talha"];
let currentUser=["Ali","Murad","rimsha","tania"];
currentUser.forEach(user => {
    const currentUserLower=user.toLowerCase();///to make in lowercase
    if(users.includes(currentUserLower)){
        console.log(`Sorry, the username '${user}' is not available. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${user}' is available.`);
        users.push(currentUserLower)
        console.log(users)////print array after pushing 
    }
});














