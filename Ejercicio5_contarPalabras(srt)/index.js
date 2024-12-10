function contarPalabras(str){
    return  str.split(/\s+/).length
}
console.log(contarPalabras("javascript")); //1
console.log(contarPalabras("ada lovelace")); //2
console.log(contarPalabras("si debuggear es el proceso de remover bugs programar es el proceso de arreglarlos")); //14

/*---- str.split(/\s+/): Divide el string en palabras usando un separador basado en uno o más espacios en blanco(tabulaciones, espacios,saltos de línea.)----------*/
/*------str.trim():Elimina los espacios en blanco y al final del string--- */
/*----str.trim()=== "" : Si la cadena esta vacía después de eliminar los espacios, devuelve 0*/
/*---.lenght: Devuelve la cantidad de elementos(palabras) obtenidos tras el split.----- */