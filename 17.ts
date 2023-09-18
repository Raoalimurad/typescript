

////making guest list which wanted to invite;
let guestlist=["faheem","ali","rao","murad","aliza"];
///plan cancel only invite two person using while loap
while(guestlist.length>2){
    let removeguest=guestlist.pop();
    if(removeguest){
        console.log(`sorry ${removeguest},i can't invite you`);///apploogize
    }
}

////those remaing invite them
guestlist.forEach(guest => {
    console.log(`${guestlist} you are still invited`);////still invited
});
////delete all using pop()
guestlist.pop();
guestlist.pop();
console.log("empty guestlist",guestlist);///print empty list
