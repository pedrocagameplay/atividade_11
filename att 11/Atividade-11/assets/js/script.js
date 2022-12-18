function mostrarNome () {
  let divNova = document.createElement('div')
  let inputNome = document.querySelector('#nome')
  let inputIdade = document.querySelector('#idade')
  let textoNovo = document.createTextNode(`Boas-vindas! Você se chama ${inputNome.value} e tem ${inputIdade.value} anos.`)

  divNova.appendChild(textoNovo)
  document.body.appendChild(divNova)
}

let botaoOk = document.querySelector('#botao')
botaoOk.onclick = mostrarNome