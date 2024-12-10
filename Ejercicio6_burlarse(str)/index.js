function burlarse(str){
    const strSinA = str.replaceAll("a", "i");
    const strSinE = strSinA.replaceAll("e", "i");
    const strSinO = strSinE.replaceAll("o", "i");
    const strSinU = strSinO.replaceAll("u", "i");
    
    return strSinU
}
console.log(burlarse("programar es dificil")); //"prigimir is dificil"

//----creamos const de str con valores srt.replaceAll:Lo que hace este metodo en este caso es remplazarnos las vocales que le indicamos-------.