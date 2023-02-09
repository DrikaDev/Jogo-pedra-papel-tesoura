var jogadorEscolha = 0;
var jogadorPontuacao = 0;
var computadorEscolha = 0;
var computadorPontuacao = 0;
var ganhador = -1;

function jogar(escolha) {

    //alert(escolha);

    //aqui o jogador escolhe com o onclick na img:
    jogadorEscolha = escolha;

    // aqui o computador faz a escolha com sorteio random:
    computadorEscolha = Math.floor((Math.random() * (3 - 1 + 1))) + 1;

    //condições para
    // 1 pedra
    // 2 papel
    // 3 tesoura
    if (jogadorEscolha == 1 && computadorEscolha == 1) {
        ganhador = 0;
    } else if (jogadorEscolha == 1 && computadorEscolha == 2) {
        ganhador = 2;
    } else if (jogadorEscolha == 1 && computadorEscolha == 3) {
        ganhador = 1;

    } else if (jogadorEscolha == 2 && computadorEscolha == 1) {
        ganhador = 1;
    } else if (jogadorEscolha == 2 && computadorEscolha == 2) {
        ganhador = 0;
    } else if (jogadorEscolha == 2 && computadorEscolha == 3) {
        ganhador = 2;
        
    } else if (jogadorEscolha == 3 && computadorEscolha == 1) {
        ganhador = 2;
    } else if (jogadorEscolha == 3 && computadorEscolha == 2) {
        ganhador = 1;
    } else if (jogadorEscolha == 3 && computadorEscolha == 3) {
        ganhador = 0;
    }

    // alert(ganhador);

    //adicionar a classe 'selecionado' para o jogador e computador:
    document.getElementById('jogador-escolha-' + jogadorEscolha).classList.add('selecionado');
    document.getElementById('computador-escolha-' + computadorEscolha).classList.add('selecionado');

    if (ganhador == 0) {
        document.getElementById('mensagens').innerHTML = 'Deu empate!';   
    }else if (ganhador == 1){
        document.getElementById('mensagens').innerHTML = 'Jogador ganhou!';
        //toda vez que jogador 1 ganhar, a gente soma a pontuação:
        jogadorPontuacao++;
    }else if (ganhador == 2){
        document.getElementById('mensagens').innerHTML = 'Computador ganhou!';
        //toda vez que computador 2 ganhar, a gente soma a pontuação:
        computadorPontuacao++;
    }

    document.getElementById('jogador-pontos').innerHTML = jogadorPontuacao;
    document.getElementById('computador-pontos').innerHTML = computadorPontuacao;
}