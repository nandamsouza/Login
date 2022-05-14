const nome = document.getElementById('nome');
const senha = document.getElementById('senha');
const confirmeSenha = document.getElementById('confirmeSenha');
const botao = document.getElementById('button');

botao.addEventListener('click', (evento) => {
    evento.preventDefault();

    validacao()
})

function validacao() {

    if (nome.value == '') {
        nome.classList.add("erro")
    } else {
        nome.classList.remove("erro")
    }
    if (senha.value == '') {
        senha.classList.add("erro")

    } else {
        senha.classList.remove("erro")
    }
    if (confirmeSenha.value == '') {
        confirmeSenha.classList.add("erro")
       
        
    } else if(confirmeSenha.value != senha.value) {
        confirmeSenha.classList.add("erro")
        alert('senhas incompatíveis')
    } else {
        confirmeSenha.classList.remove("erro")
    }
}