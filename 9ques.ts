//created programm to find highest number in array
//created by [Rao Ali Murad]
//Date 12/07/2023

 
function Maxnumber(num:number[]): number {
    let maximum=num[0]//here declere the the maximum value of arry

    ///now we start loap to find maximum value in this array
    for(let i=0; i  < num.length;i++){
    if(num[i]>maximum){
        maximum=num[i]
    }
    }
    return maximum
}


let maxnum:number[]=[10,2,3,4,5,6]//we declare the arry
const maza=Maxnumber(maxnum)
console.log("the maximum array of in this is" +maza)





  