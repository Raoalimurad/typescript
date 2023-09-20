function make_shirt(size:string="large",message:string="i love typecript"):void{
    console.log(`my shirt size is ${size} and ${message}`)
}
make_shirt();//////deafult parameter in large
make_shirt("medium");///giving one argument and message is default
make_shirt("small","i love javascript");///giving two arguments in small
