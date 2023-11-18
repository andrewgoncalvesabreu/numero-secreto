function olaMundo() {
    console.log("Olá mundo!")
}

olaMundo()

function olaNome(nome) {
    console.log(`Olá ${nome}!`)
}

olaNome('Andrew')

function dobro(numero) {
    return numero * 2
}

let resultadoDobro = dobro(14)
console.log(resultadoDobro)

function media(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3
}

let calculaMedia = media(14, 21, 10)
console.log(calculaMedia)


function doisNumeros(numero1, numero2) {
    if(numero1 > numero2) {
        return numero1
    } else {
        return numero2
    }
}

console.log(doisNumeros(5, 2))

function multiplicacao(numero) {
    return numero * numero
}

let multi = multiplicacao(14) 
console.log(multi)