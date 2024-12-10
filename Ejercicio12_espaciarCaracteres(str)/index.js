function espaciarCaracteres(str){
// Divido el string en caracteres, unimos con espacios y devolvemos el resultado---
    return str.split("").join(" ");
}
console.log(espaciarCaracteres("javascript")); //"j a v a s c r i p t"
console.log(espaciarCaracteres("ada lovelace")); //"a d a l o v e l a c e"

// -- str.split(""): Convierte el string en un array de caracteres.---
//-- join(" "): Une los caracteres del array con un espacio entre ellos.----