import { pedido } from "../Opcoes/Opcoes";

export default function BarraFim(props) {
    const { classBotaoCinza, classBotaoVerde } = props;

    function finalizarPedido() {
        for (let i = 0; i < pedido.length; i++) {
            if (pedido[i].qtd === 0) {
                pedido.splice(i, 1);
            }
        }

        let comidas = {
            nome: [],
            qtd: [],
            preco: []
        }
        let bebidas = {
            nome: [],
            qtd: [],
            preco: []
        }
        let sobremesas = {
            nome: [],
            qtd: [],
            preco: []
        }


        for (let i = 0; i < pedido.length; i++) {
            switch (pedido[i].type) {
                case 'comida':
                    comidas.nome.push(pedido[i].name);
                    comidas.qtd.push(pedido[i].qtd);
                    comidas.preco.push(pedido[i].price);
                    break

                case 'bebida':
                    bebidas.nome.push(pedido[i].name);
                    bebidas.qtd.push(pedido[i].qtd);
                    bebidas.preco.push(pedido[i].price);
                    break

                case 'sobremesa':
                    sobremesas.nome.push(pedido[i].name);
                    sobremesas.qtd.push(pedido[i].qtd);
                    sobremesas.preco.push(pedido[i].price);
                    break

                default:
                    break
            }
        }

        criarMensagem(comidas, bebidas, sobremesas)
    }

    function criarMensagem(comidas, bebidas, sobremesas) {
        let stringComidas = ''
        let stringBebidas = ''
        let stringSobremesas = ''
        let total = 0;

        for (let i = 0; i < comidas.nome.length; i++) {
            comidas.preco[i] = comidas.preco[i].replace(",", "");

            if (i !== comidas.nome.length - 1) {
                stringComidas += comidas.nome[i] + ' (' + comidas.qtd[i]
                    + 'X), ';
            } else {
                stringComidas += comidas.nome[i] + ' (' + comidas.qtd[i]
                    + 'X).'
            }

            total += Number(comidas.preco[i]);
        }

        for (let i = 0; i < bebidas.nome.length; i++) {
            bebidas.preco[i] = bebidas.preco[i].replace(',', '');

            if (i !== bebidas.nome.length - 1) {
                stringBebidas += bebidas.nome[i] + ' (' + bebidas.qtd[i]
                    + 'X), ';
            } else {
                stringBebidas += bebidas.nome[i] + ' (' + bebidas.qtd[i]
                    + 'X).'
            }

            total += Number(bebidas.preco[i]);
        }

        for (let i = 0; i < sobremesas.nome.length; i++) {
            sobremesas.preco[i] = sobremesas.preco[i].replace(',', '');

            if (i !== sobremesas.nome.length - 1) {
                stringSobremesas += sobremesas.nome[i] + ' (' + sobremesas.qtd[i]
                    + 'X), ';
            } else {
                stringSobremesas += sobremesas.nome[i] + ' (' + sobremesas.qtd[i]
                    + 'X).'
            }

            total += Number(sobremesas.preco[i]);
        }

        let mensagem = `Olá, gostaria de fazer o pedido:
        - Pratos: ${stringComidas}
        - Bebidas: ${stringBebidas}
        - Sobremesas: ${stringSobremesas}
        Total: R$ ${(total / 100).toFixed(2)}
        `

        window.location = 'https://wa.me/5519992732874?text=' + encodeURIComponent(mensagem);
    }

    return (
        <div className="barra-fim">
            <button className={classBotaoCinza}> Selecione os 3 itens para fechar o pedido </button>
            <button onClick={finalizarPedido} className={classBotaoVerde}> Fechar pedido </button>
        </div>
    )
}