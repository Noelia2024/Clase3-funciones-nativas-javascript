function esFraccionMayorAUno(_fraccion){
    return _fraccion > 1
}
console.log(esFraccionMayorAUno(1/2)); //false
console.log(esFraccionMayorAUno(2/2)); //false
console.log(esFraccionMayorAUno(4/2)); //true