function ocultarContrasenia(contrasenia){
    //Convertimos la contrasenia a un string po si no lo es y reemplazamos cada caracter con un asterisco.---
    return "*".repeat(contrasenia.toString().length);

}
console.log(ocultarContrasenia(123456)); //"******"
console.log(ocultarContrasenia(111222333)); //"*********"

//--contrasenia.toString(): Asegura que la contraseña se trata como un string.--
//"*".repeat(): Genera una cadena de asteriscos de la misma longitud que el string de la contraseña.---