function esPuenteSeguro(puente){
  //Verifico si el string contiene algún espacio---  
    return !puente.includes(" ");
}
console.log(esPuenteSeguro("### ##")); //false
console.log(esPuenteSeguro("#### ####")); //false
console.log(esPuenteSeguro("#######")); //true

//puente.includes(' '): Verifica si el string contiene un espacio.-------
//!puente.includes(' '): Devuelve true si no hay espacios (el puente está seguro) y false si hay algún espacio (el puente está cortado).