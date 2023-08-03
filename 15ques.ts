let predinner:string[]=["Fahad","Ghulam","ali"]
console.log("the list of initial guest:",predinner)//intial guest

///Annoucing the big news about dinner;
console.log('Good news! we have a big dinner')

predinner.unshift("Ali Murad")
predinner.splice(Math.ceil(predinner.length/2),0,'Gul shah')
predinner.push('Yasir')


console.log('The new list of guests is',predinner)

for(let guest of predinner){
    console.log(`${guest} you are invited in dinner kinldy come.`)
}



