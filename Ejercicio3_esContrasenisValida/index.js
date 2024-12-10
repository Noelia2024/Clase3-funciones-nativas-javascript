function esValida(contrasenia){
    return contrasenia.length >=8;
}
/*------si tengo una contraseña que sus caracteres sean mayor o igual a 8 que me devuelva true-------*/
/*----- de lo contrario que me devuelva false---*/

console.log(esValida("contraseniaMuySegura"));
console.log(esValida("abc123"));
