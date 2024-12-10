function obtenerPrimeraOracion(str){
    const match = str.match(/^[^.!?]*[.!?]?/);
    return match ? match[0].trim():"";
}
console.log(obtenerPrimeraOracion("A mí no me preguntes, sólo soy una oración")); //"A mí no me preguntes, sólo soy una oración"
console.log(obtenerPrimeraOracion("Tengo varias oraciones.Esta es la segunda. Y esta es la tercera")); // "Tengo varias oraciones"

//--Expresión regular /^[^.!?]*[.!?]?/:
//---^: Comienza a buscar desde el inicio del string.------
//---[^.!?]*: Encuentra todos los caracteres que no son puntos (.), signos de exclamación (!), o interrogación (?).-----
//---[.!?]?: Captura opcionalmente el primer punto, signo de exclamación, o interrogación encontrado.-----
//---str.match():
//------Devuelve un array con el resultado de la expresión regular o null si no hay coincidencias.---------
//---match ? match[0].trim() : "":
//----Si se encuentra una coincidencia, toma la primera oración y elimina los espacios adicionales con trim().---
//-----Si no hay coincidencias, devuelve una cadena vacía ("").----

//----Esta implementación funciona bien incluso si el texto no tiene puntuación o está vacío.----