function obtenerExtension(archivo){
// Dividio el string por el punto y devolvemos el último elemento--
    return archivo.split('.').pop();
}
console.log(obtenerExtension("imagen.png")); //"png"
console.log(obtenerExtension("index.html")); //"html"
console.log(obtenerExtension("notas.txt")); //"txt"

//---archivo.split('.'): Divide el string en un array usando el punto como separador.---
//---pop(): Obtiene el último elemento del array, que corresponde a la extensión del archivo.---
//---Esto funciona incluso para archivos con múltiples puntos en el nombre, ya que siempre toma la última parte como la extensión.---