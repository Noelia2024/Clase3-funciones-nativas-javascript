function capitalizar(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}
console.log(capitalizar("lovelace")); //"Lovelace"
console.log(capitalizar("había una vez...")); //"Había una vez..."

//------con charAt se obtiene el primer caracter de la cadena.------
//------con toUpperCase() se convierte el primer carácter a mayúscula.-------
//------con slice(1) se obtiene el resto de la cadena, desde el segundo carácter hasta el final.------
