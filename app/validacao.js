function verificaSeOChutePossuiUmValorValido (chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAMER OVER") {  
            
            document.body.innerHTML =
            `
            <h2>Game Over!!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
            `
            document.body.style.backgroundColor = "black";
            
        }else{
            elementoChute.innerHTML += '<div>Valor inválido</div>'
        
        }
    }

    if (numeroForMaiorOuMenorQueONumeroPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre o ${menorValor} e ${maiorValor}</div>` 
        return
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto é ${numeroSecreto}</h3>
        <button id = "jogar-novamente" class = "btn-jogar">Jogar novamente</button>
        `
    }
    else if (numero > numeroSecreto) {
        elementoChute.innerHTML += ` <div>
        O número secreto e menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    }else{
        elementoChute.innerHTML += `<div>
        O número secreto e maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}
function chuteForInvalido(numero) {
    return Number.NaN(numero)
}

function numeroForMaiorOuMenorQueONumeroPermitido(numero){
     return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', (e)=>{
    
  if (e.target.id == 'jogar-novamente') {
    window.location.reload()
    
  }  
})

