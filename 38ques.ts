function describCity(city:string,country:string="default country"){
   let store =(`${city} is in ${country}`);
   return store;

}
let result1=describCity("karachi","Pakistan");
let result2=describCity("Dehli","India");
let result3=describCity("New york")


console.log( result1);
console.log( result2);
console.log( result3);