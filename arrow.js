


function Suma (a,b){
    return a + b 
}
console.log (`Suma`,Suma(10,20))

const SumaDos  = function (a,b) {
    return a + b
}
console.log (`Suma`,SumaDos(20,20))

function SumaTres (a,b) {
    return a + b 
}
var NumUno = 5
var NumDos = 3
console.log (`Suma`,SumaTres(NumUno,NumDos))

const SumaCuatro = (a,b) => {
    return a + b
}
console.log (`Suma`, SumaCuatro(30,30))

const SumaCinco = (a,b) => a + b
console.log (`Suma`, SumaCinco(50,50))

const MiArreglo = ["Perros", "Gatos", "Patos", "Ratones"]
MiArreglo.forEach ((elemento)=>console.log (elemento))