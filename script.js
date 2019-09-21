// área para declarar as váriaveis
var nomeInput = document.getElementById('nome')
var qtd = document.getElementById('quantidade')
var data = document.getElementById('data')
var msg = document.getElementById('mensagem')
var enviar = document.getElementById('enviar')


// Área para atribuir as funções
nomeInput.addEventListener('blur', nomeConfirm)
qtd.addEventListener('blur', numeroConfirm)
enviar.addEventListener('click', enviarPedido)

// Área para as funções

// Validar nome!
function nomeConfirm() {
    if (nomeInput.value == "" || nomeInput.value == "Nome Invalido!") {
        nomeInput.style.cssText = 'border: 1px solid red'
        return false
    } else {
        nomeInput.style.cssText = "Border: 1px solid blue"
        return true
    }
}

// Validar o número de pessoas
function numeroConfirm() {
    let numQtd = Number.parseInt(qtd.value)
    if (numQtd >= 1 && numQtd <= 5) {
        qtd.style.cssText = "border: 1px solid blue"
        return true
    } else {
        qtd.style.cssText = "border: 1px solid red"
        alert("Numero minimo de 1 pessoa e máximo de 5!")
        return false
    }
}

// Enviar mensagem
function enviarPedido() {
    if (nomeConfirm() && numeroConfirm()) {
        alert('Mensagems enviada com sucesso!')
    } else {
        alert('Falha ao enviar!')
    }
}
