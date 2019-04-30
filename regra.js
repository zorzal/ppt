var placarVc = 0;
var placarAi = 0;


function jogar() {
    //Retorna valor do radio input "Pedra - papel - Tesoura"
    var radios = document.getElementsByName('ppt');    

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            var jogada = radios[i].value;
        }
    } 
    
    document.getElementById('escolha').classList.remove('fa-hand-rock');
    document.getElementById('escolha').classList.remove('fa-hand-peace');
    document.getElementById('escolha').classList.remove('fa-hand-paper');

    document.getElementById('ai').classList.remove('fa-hand-rock');
    document.getElementById('ai').classList.remove('fa-hand-peace');
    document.getElementById('ai').classList.remove('fa-hand-paper');


    try {
        if(jogada == undefined) throw 'É necessário informar sua jogada';

        document.getElementById('jkp').classList.remove('d-none');
        document.getElementById('resultado').classList.add('d-none');
        document.getElementById('msgerro').classList.add('d-none');

        switch (jogada) {
            case "1":
                console.log("Jogada 1");
                document.getElementById('escolha').classList.add('fa-hand-rock');
                break;
            case "2":
                console.log("Jogada 2");
                document.getElementById('escolha').classList.add('fa-hand-peace');
                break;
            case "3":
                console.log("Jogada 3");
                document.getElementById('escolha').classList.add('fa-hand-paper');
                break;                
        
            default:
                break;
        }

        setTimeout(() => {
            document.getElementById('resultado').classList.remove('d-none');
            document.getElementById('jkp').classList.add('d-none');
        }, 1500);

        //CÓDIGO AI (INTELIGENCIA MAIS OU MENOS ARTIFICIAL)
        var ai = Math.floor(Math.random() * 3) + 1;

        switch (ai) {
            case 1:
                console.log("AI 1");
                document.getElementById('ai').classList.add('fa-hand-rock');
                break;
            case 2:
                console.log("AI 2");
                document.getElementById('ai').classList.add('fa-hand-peace');
                break;
            case 3:
                console.log("AI 3");
                document.getElementById('ai').classList.add('fa-hand-paper');
                break;                
        
            default:
                break;
        }

        //RESULTADO DO JOGO pedra tesoura papel
        //Limpa resultado
        document.getElementById('resultadoIcone').classList.remove('fa-meh');
        document.getElementById('resultadoIcone').classList.remove('fa-smile');
        document.getElementById('resultadoIcone').classList.remove('fa-frown');
        document.getElementById('msgResultado').classList.remove('text-warning');
        document.getElementById('resultadoIcone').classList.remove('text-warning');
        document.getElementById('msgResultado').classList.remove('text-danger');
        document.getElementById('resultadoIcone').classList.remove('text-danger');
        document.getElementById('msgResultado').classList.remove('text-success');
        document.getElementById('resultadoIcone').classList.remove('text-success');

        //INICIO DA VERIFICACAO DAS JOGADAS
        if (jogada - ai == 0) {
            console.log('Empate');
            document.getElementById('msgResultado').innerHTML =  'Você empatou!';
            document.getElementById('msgResultado').classList.add('text-warning');
            document.getElementById('resultadoIcone').classList.add('fa-meh');
            document.getElementById('resultadoIcone').classList.add('text-warning');            
            
        } else if (jogada == 1 && ai == 2){
            console.log('Você ganhou');
            document.getElementById('msgResultado').innerHTML =  'Você Ganhou!';
            document.getElementById('msgResultado').classList.add('text-success');
            document.getElementById('resultadoIcone').classList.add('fa-smile');
            document.getElementById('resultadoIcone').classList.add('text-success');
            placarVc += 1;
            
        } else if (jogada == 1 && ai == 3){
            console.log('Você perdeu');
            document.getElementById('msgResultado').innerHTML =  'Você Perdeu!';
            document.getElementById('msgResultado').classList.add('text-danger');
            document.getElementById('resultadoIcone').classList.add('fa-frown');
            document.getElementById('resultadoIcone').classList.add('text-danger');
            placarAi += 1;

        } else if (jogada == 2 && ai == 1){
            console.log('Você perdeu');
            document.getElementById('msgResultado').innerHTML =  'Você Perdeu!';
            document.getElementById('msgResultado').classList.add('text-danger');
            document.getElementById('resultadoIcone').classList.add('fa-frown');
            document.getElementById('resultadoIcone').classList.add('text-danger');
            placarAi += 1;

        } else if (jogada == 2 && ai == 3){
            console.log('Você Ganhou');
            document.getElementById('msgResultado').innerHTML =  'Você Ganhou!';
            document.getElementById('msgResultado').classList.add('text-success');
            document.getElementById('resultadoIcone').classList.add('fa-smile');
            document.getElementById('resultadoIcone').classList.add('text-success');
            placarVc += 1;

        } else if (jogada == 3 && ai == 1){
            console.log('Você ganhou');
            document.getElementById('msgResultado').innerHTML =  'Você Ganhou!';
            document.getElementById('msgResultado').classList.add('text-success');
            document.getElementById('resultadoIcone').classList.add('fa-smile');
            document.getElementById('resultadoIcone').classList.add('text-success');
            placarVc += 1;

        } else if (jogada == 3 && ai == 2){
            console.log('Você perdeu');
            document.getElementById('msgResultado').innerHTML =  'Você Perdeu!';
            document.getElementById('msgResultado').classList.add('text-danger');
            document.getElementById('resultadoIcone').classList.add('fa-frown');
            document.getElementById('resultadoIcone').classList.add('text-danger');
            placarAi += 1;
        } else {
            
        }

        if (placarVc == 3){
            console.log('Fim do jogo');
            document.getElementById('placar').innerHTML =  placarVc+'x'+placarAi;
            document.getElementById('placarFim').classList.remove('d-none');
            document.getElementById('placarFim').innerHTML =  'Você é o campeão';
            placarVc = 0;
            placarAi = 0;
        } else if (placarAi == 3){
            console.log('Fim do jogo');
            document.getElementById('placar').innerHTML =  placarVc+'x'+placarAi;
            document.getElementById('placarFim').classList.remove('d-none');
            document.getElementById('placarFim').innerHTML =  'Game Over';
            placarVc = 0;
            placarAi = 0;
        } else {
            document.getElementById('placarFim').classList.add('d-none');
            document.getElementById('placar').innerHTML =  placarVc+'x'+placarAi;
        }

        
        
        


    } catch (error) {
        document.getElementById('msgerro').classList.remove('d-none');
    }

console.log(jogada);
}

