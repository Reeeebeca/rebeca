let num1 = 2
const num2 = 3
var msg = "Olá amigos! Esse é o número: "
console.log (msg , num1)
console.log (num1 + num2)
console.log (typeof num1)
console.log (typeof msg)
//métodos são funcionalidades prontas da linguagem e que 
//podem receber parametros



function Somar () {
    n1 = 2
    n2 = 5
    console.log ("O resultado é: ", n1 + n2)
}
Somar ()

function ComParametros (n1,n2) {
    let resultado = "O resultado é: " + (n1 + n2)
    console.log (resultado)
}

ComParametros (26, 63)
ComParametros (46, 92)

const IfElse  = (numero) => {
    let result = numero % 2

    if (result == 1) {
        return "número impar"
    }
    else  {
        return "número par"
        }
}

console.log (IfElse (56))
console.log (IfElse (6))
console.log (IfElse (73))
