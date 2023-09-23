const menorValor = 20
const maiorValor = 30
const numeroSecreto = gerarNumeroAleatorio()


function gerarNumeroAleatorio() {
        return parseInt(Math.random() *  (menorValor - maiorValor - 1) + (maiorValor + 1));
    }

console.log("O Número Secreto é: "+numeroSecreto) 

const elementoMenorValor = document.getElementById("menor-valor")
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById("maior-valor")
elementoMaiorValor.innerHTML = maiorValor