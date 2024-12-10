function removerVocales(str){
    const resultado = str.replace(/[aeiou]/gi, "")
    return resultado
}
console.log(removerVocales("javascript")); // "jvscrpt"
console.log(removerVocales("ada lovelace")); // "d lvlc"

//-- la expresión regular [aeiou] establecida como global, combinada con la función replace busca
// todos los caracteres indicados en los corchetes y los reemplaza por un carácter vacío. 
//--Para utilizarlo con todas las vocales inclusive las acentuadas, mayúsculas;
//--Ejemplo: /[aáAÁeéEÉiíIÍoóOÓuúUÚ]/g--- FUENTE: STACK OVERFLOW---