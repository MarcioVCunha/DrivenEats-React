export default function BarraFim() {
    return (
        <div class="barra-fim">
            <button class="botao-final cinza"> Selecione os 3 itens para fechar o pedido </button>
            <button onclick="finalizar();" class="botao-final verde sumir"> Fechar pedido </button>
        </div>
    )
}