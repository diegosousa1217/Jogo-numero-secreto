let listasNumerosSorteados = [];
let numeroLimite= 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);    
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.1});
}
exibirMensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoTela('h1', 'acertou!!');
        let  palavraTentavia = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `vocë descobriu o número secreto com ${tentativas} ${palavraTentavia}`;
        exibirTextoTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            exibirTextoTela('p', 'O número secreto é menor');
        } else{
            exibirTextoTela('p', 'O múmero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() *numeroLimite +1);
    let quantidadeElementosLista = listasNumerosSorteados.length;

    if(quantidadeElementosLista == 10){
        listasNumerosSorteados = []
    }

    if(listasNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listasNumerosSorteados.push(numeroEscolhido)
        console.log(listasNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagemInicial(){
    exibirTextoTela('h1', 'Jogo do número secreto');
    exibirTextoTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}