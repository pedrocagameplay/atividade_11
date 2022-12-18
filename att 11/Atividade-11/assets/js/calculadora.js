const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2')
const resultado = document.querySelector('#total')
const acoes = document.querySelector('#acoes')

function soma () {
  resultado.textContent = parseFloat(numero1.value) + parseFloat(numero2.value)
}

function subtracao () {
  resultado.textContent = parseFloat(numero1.value) - parseFloat(numero2.value)
}

function multiplicacao () {
  resultado.textContent = parseFloat(numero1.value) * parseFloat(numero2.value)
}

function divisao () {
  resultado.textContent = parseFloat(numero1.value) / parseFloat(numero2.value)
}

const imgSoma = document.createElement('img')
imgSoma.alt = 'soma'
imgSoma.src = 'assets/img/soma.png'
imgSoma.width = 32
imgSoma.height = 32
imgSoma.onclick = soma

const imgSubtracao = document.createElement('img')
imgSubtracao.alt = 'subtração'
imgSubtracao.src = 'assets/img/subtracao.png'
imgSubtracao.width = 32
imgSubtracao.height = 32
imgSubtracao.onclick = subtracao

const imgMultiplicacao = document.createElement('img')
imgMultiplicacao.alt = 'multiplicação'
imgMultiplicacao.src = 'assets/img/multiplicacao.png'
imgMultiplicacao.width = 32
imgMultiplicacao.height = 32
imgMultiplicacao.onclick = multiplicacao

const imgDivisao = document.createElement('img')
imgDivisao.alt = 'divisão'
imgDivisao.src = 'assets/img/divisao.png'
imgDivisao.width = 32
imgDivisao.height = 32
imgDivisao.onclick = divisao

acoes.append(imgSoma, imgSubtracao, imgMultiplicacao, imgDivisao)