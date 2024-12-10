function esUltimoCaracter(palabra, caracter){
    return palabra.charAt(palabra.length - 1) === caracter
}
console.log(esUltimoCaracter("lovelace", "e"));
console.log(esUltimoCaracter("lovelace", "f"));

/*------Con charAt  podemos saber que caracter se encuentra en una determinada posición de un string.-------
--------- Para saber cual es el últino caracter podemos utilizar la propiedad length------
-------La posción del último caracter es -1--------*/