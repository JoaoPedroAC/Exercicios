document.addEventListener('DOMContentLoaded', () => {
    const tela = document.querySelector('.tela');
    // isso é oq definido o contexto da tela e é o que desenha
    const contexto = tela.getContext('2d');
    tela.Width = 700;
    tela.height = 500;

    contexto.lineWidith = 7;
    contexto.strokeStyle = 'blue'
        // sera nossopincel
    const pincel = {
            // isso pq nosso mousa nao vai ta fazendo nada
            ativo: false,
            movendo: false,
            pos: { x: 0, y: 0 },
            // nao temos nada entao é null
            posAnterior: null
        }
        // sim, é uma função de seta
    const desenhandoLinha = (linha) => {

            // para desenhar na tela precisa - se do contexto
            // aqui estamos desenhando um caminho
            contexto.beginPath();
            // aqui é onde diremos para onde o cursor irá seguir
            contexto.moveTo(linha.posAnterior.x, linha.posAnterior.y);
            // aqui determina onde acaba
            // definimos o centro
            contexto.lineTo(linha.pos.x, linha.pos.y);
            // aqui vai desenhar
            contexto.stroke();
        }
        // desenhandoLinha({
        //         pos: { x: 250, y: 250 },
        //         posAnterior: { x: 10, y: 10 }
        //     })
        // aqui é o botao do maouse pressionado
    tela.onmousedown = (evento) => {
            pincel.ativo = true
        }
        // aqui é o botao do maouse solto
    tela.onmouseup = (evento) => { pincel.ativo = false }
        // aqiu sera o pincel se movendo
    tela.onmousemove = (evento) => {
            pincel.pos.x = evento.clientX
            pincel.pos.y = evento.clientY
            pincel.movendo = true;
        }
        // aqui é o cilo onde a aplicação sempre irá checar
    const ciclo = () => {
        if (pincel.ativo && pincel.movendo && pincel.posAnterior) {
            desenhandoLinha({
                pos: pincel.pos,
                posAnterior: pincel.posAnterior
            })
            pincel.movendo = false;
        }
        // aqui é para salvar as alterações
        pincel.posAnterior = {
            x: pincel.pos.x,
            y: pincel.pos.y
        };
        // essa função vai ocorre de tanto em tanto tempo( é o valor e o tempo em milissegundos)
        setTimeout(ciclo, 10);
    }
    ciclo()
})