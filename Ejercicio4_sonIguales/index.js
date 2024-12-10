function sonIguales(a,b){
    return a.length === b.length
}
console.log(sonIguales("javascript", "JavaScript"));//true
console.log(sonIguales("AdA LoVeLaCe", "Ada Lovelace"));//true
console.log(sonIguales("NO ESTOY GRITANDO", "ESTOY GRITANDO"));//false