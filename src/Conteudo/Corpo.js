import Topo from "./Topo/Topo"
import Linhas from "./Opcoes/Opcoes"
import BarraFim from "./Barra_Fim/Barra_Fim"
import React from "react";

export default function Corpo() {
    function averiguarPedido(pedido) {
        let i = 0;
        const typesPedidos = [0, 0, 0];

        while (i < pedido.length) {
            switch (pedido[i].type) {
                case 'comida':
                    if (pedido[i].qtd !== 0) {
                        typesPedidos[0] = 1;
                    }
                    break;

                case 'bebida':
                    if (pedido[i].qtd !== 0) {
                        typesPedidos[1] = 1;
                    } break;

                case 'sobremesa':
                    if (pedido[i].qtd !== 0) {
                        typesPedidos[2] = 1;
                    } break
                default:
                    break;
            }

            if (typesPedidos[0] === 1 && typesPedidos[1] === 1 && typesPedidos[2] === 1) {
                setClassBotaoCinza('sumir');
                setClassBotaoVerde('botao-final verde');
            } else {
                setClassBotaoCinza('botao-final cinza');
                setClassBotaoVerde('sumir');
            }

            i++;
        }
    }

    const [classBotaoCinza, setClassBotaoCinza] = React.useState('botao-final cinza');
    const [classBotaoVerde, setClassBotaoVerde] = React.useState('sumir');

    return (
        <div>
            <Topo />
            <Linhas averiguarPedido={averiguarPedido} />
            <BarraFim classBotaoCinza={classBotaoCinza} classBotaoVerde={classBotaoVerde} />
        </div>
    )
}