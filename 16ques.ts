let guest:string[]=["Fahad","Ghulam","ali","yasir","Taha"]
console.log("Sorry i can invite only two person")
while(guest.length> 2) {
let delteguest=guest.pop()
console.log(`${delteguest} i can not invite you because i have no more spcae`)
}


for(let gue of guest){
console.log(`${guest} you are sill invited kindly come`)
}
guest.splice(0,guest.length)
console.log(guest)