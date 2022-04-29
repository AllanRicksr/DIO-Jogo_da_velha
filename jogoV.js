var jogador = null;
var jogadorSelecionado = document.getElementById('jogador-da-vez');

mudarJogador('X');

function acaoDoQuadrado(id) {
    var quadrado = document.getElementById(id);

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}