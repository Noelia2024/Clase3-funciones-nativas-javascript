function aHackerSpeak(str) {
    return str
    .replace(/i/gi, "1")
    .replace(/e/gi, "3")
    .replace(/a/gi, "4")
    .replace(/s/gi, "5")
    .replace(/o/gi, "0");
}

console.log(aHackerSpeak("javascript")); //"j4v45cr1pt"
console.log(aHackerSpeak("soy una hacker")); //"50y un4 h4ck3r"
console.log(aHackerSpeak("ADA LOVELACE")); // "4DQ L0V3L4C3"


//-----En JavaScript "gi" es una combinación de indicadores que se utiliza en expresiones regulares para buscar coincidencias globales y sin distinguir entre mayúsculas y minúsculas.----
//--- g: indica que la búsqueda se realice en toda la cadena y se devuelvan todas las coincidencias.----
//--- i: indica que la coincidencia se realice sin distinguir entre mayúsculas y minúsculas.----
//--- las barras diagonales "/" se utilizan para encerrar el patrón de la expesión regular.----