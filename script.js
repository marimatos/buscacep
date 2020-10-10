const inputCep = document.querySelector('#cep')
const btnCep = document.querySelector('#btn')
const logradouroEl = document.querySelector('.logradouro')
const bairroEl = document.querySelector('.bairro')
const localidadeEl = document.querySelector('.localidade')
const ufEl = document.querySelector('.uf')

btnCep.addEventListener('click', handleClick)

function handleClick(event) {
  event.preventDefault()
  const cep = inputCep.value 
  buscaCep(cep)
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.json())
  .then(cepObj => {
    console.log(cepObj.cep)
    logradouroEl.innerText = cepObj.logradouro
    bairroEl.innerText = cepObj.bairro
    localidadeEl.innerText = cepObj.localidade
    ufEl.innerText = cepObj.uf
  })
}