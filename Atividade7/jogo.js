// escolhas do jogador e do computador
var escolhas = ["Pedra", "Papel", "Tesoura"];
var escolhaJogador;
var escolhaComputador;

// função para exibir o resultado
function exibirResultado(resultado) {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = resultado;
}

// função para gerar escolha aleatória do computador
function escolhaAleatoria() {
    var indice = Math.floor(Math.random() * 3);
    escolhaComputador = escolhas[indice];
}

// função para determinar o vencedor
function determinarVencedor() {
    if (escolhaJogador == escolhaComputador) {
        exibirResultado("Empate!");
    } else if (escolhaJogador == "Pedra") {
        if (escolhaComputador == "Tesoura") {
            exibirResultado("Pedra quebra tesoura. Você venceu!");
        } else {
            exibirResultado("Papel cobre a pedra. Você perdeu!");
        }
    } else if (escolhaJogador == "Papel") {
        if (escolhaComputador == "Pedra") {
            exibirResultado("Papel cobre a pedra. Você venceu!");
        } else {
            exibirResultado("Tesoura corta papel. Você perdeu!");
        }
    } else if (escolhaJogador == "Tesoura") {
        if (escolhaComputador == "Papel") {
            exibirResultado("Tesoura corta papel. Você venceu!");
        } else {
            exibirResultado("Pedra quebra tesoura. Você perdeu!");
        }
    }
}

// função para obter a escolha do jogador
function jogar(escolha) {
    escolhaJogador = escolha;
    escolhaAleatoria();
    determinarVencedor();
}

// adiciona o evento de clique aos botões
document.getElementById("Pedra").addEventListener("click", function() { jogar("Pedra"); });
document.getElementById("Papel").addEventListener("click", function() { jogar("Papel"); });
document.getElementById("Tesoura").addEventListener("click", function() { jogar("Tesoura"); });
document.getElementById("Reiniciar").addEventListener("click", function() { window.location.reload(); });